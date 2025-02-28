import { errorCode } from "@enums/response.enum";
import axios from "axios";

type uploadType = {
  token: string;
  owner: string;
  repo: string;
};

async function uploadWorkflowFile({ token, owner, repo }: uploadType) {
  try {
    const workflowFile = `
      name: Notify Server on PR and Issues
      on:
        pull_request:
          types: [opened, closed]
        issues:
          types: [opened, closed]
      jobs:
        notify:
          runs-on: ubuntu-latest
          steps:
            - name: Checkout repository
              uses: actions/checkout@v4
            - name: Send notification to server
              env:
                SERVER_URL: "https://izytask.com/api/github/notify"
              run: |
                EVENT_TYPE="\${{ github.event_name }}"
                GITHUB_ID="\${{ github.actor }}"
                REPO_ID="\${{ github.repository }}"
                PR_OR_ISSUE_ID="\${{ github.event.pull_request.number || github.event.issue.number }}"
                TITLE="\${{ github.event.pull_request.title || github.event.issue.title }}"
                STATUS="\${{ github.event.action }}"
                PAYLOAD=$(cat <<EOF
                {
                  "event_type": "$EVENT_TYPE",
                  "github_id": "$GITHUB_ID",
                  "repo_id": "$REPO_ID",
                  "pr_or_issue_id": "$PR_OR_ISSUE_ID",
                  "title": "$TITLE",
                  "status": "$STATUS",
                  "timestamp": "$(date -u +'%Y-%m-%dT%H:%M:%SZ')"
                }
                EOF
                )
                curl -X POST -H "Content-Type: application/json" -d "$PAYLOAD" "$SERVER_URL"
    `;
    const base64Content = Buffer.from(workflowFile).toString("base64");
    await axios.put(
      `https://api.github.com/repos/${owner}/${repo}/contents/.github/workflows/notify-server.yml`,
      {
        message: "Add GitHub Action to notify server",
        content: base64Content,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github+json'
        }
      }
    );
  } catch (err) {
    console.log("err when upload github action ====> ", err)
    return {
      statusCode: 500,
      resCode: errorCode.INTERNAL_SERVER_ERROR.resCode,
      message: errorCode.INTERNAL_SERVER_ERROR.message,
      data: null,
    };
  }
}

export { uploadWorkflowFile };