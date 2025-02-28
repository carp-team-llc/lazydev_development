function VerificationMailForm(url: string, username: string) {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Verification</title>
          <style>
              * {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
                  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
              }

              body {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  min-height: 100vh;
                  background-color: #9f2cbf;
                  padding: 1rem;
              }

              .card {
                  background: white;
                  border-radius: 12px;
                  width: 100%;
                  max-width: 440px;
                  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
              }

              .card-content {
                  padding: 1.5rem;
                  text-align: center;
              }

              .icon-container {
                  width: 64px;
                  height: 64px;
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin: 0 auto 1rem;
                  padding: 12px;
              }

              .icon {
                  width: 200%;
                  height: 200%;
                  fill: none;
                  stroke: white;
                  stroke-width: 2;
                  stroke-linecap: round;
                  stroke-linejoin: round;
              }

              .title {
                  font-size: 1.25rem;
                  font-weight: 600;
                  margin-bottom: 0.5rem;
                  align-items: center;
                  justify-content: center;
                  gap: 0.5rem;
                  text-align: center;
              }

              .description {
                  color: #4b5563;
                  font-size: 0.875rem;
                  margin-bottom: 1.5rem;
              }

              .verify-button {
                  background-color: #9f2cbf;
                  color: white;
                  border: none;
                  padding: 0.75rem 1rem;
                  border-radius: 0.375rem;
                  font-weight: 500;
                  width: 100%;
                  cursor: pointer;
                  margin-bottom: 1.5rem;
                  transition: background-color 0.2s;
              }

              .verify-button:hover {
                  background-color: #9f2cbf;
              }

              .info-text {
                  color: #4b5563;
                  font-size: 0.875rem;
                  margin-bottom: 1.5rem;
                  padding: 0 1rem;
              }
              .footer2 {
                  color: #4b5563;
                  font-size: 0.875rem;
                  padding: 0 1rem;
              }

              .footer {
                  background-color: #f3f4f6;
                  padding: 1rem;
                  border-radius: 0.5rem;
                  margin: 0 1rem 1rem;
              }

              .footer-text {
                  color: #6b7280;
                  font-size: 0.75rem;
                  text-align: center;
              }
          </style>
      </head>
      <body>
          <div class="card">
              <div class="card-content">
                  <div class="icon-container">
                      <img class="icon" src="https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/lazydev-big.png" alt="Email verification">
                  </div>

                  <h2 class="title">
                      Please verify your email <span style="color: #f59e0b;">☺</span>
                  </h2>

                  <p class="description">
                      Hi and welcome to Lazy Dev, ${username}!
                  </p>

                  <p class="description">
                      You have registered an account at Lazy Dev, please follow the
                      instructions to activate your account!
                  </p>

                  <button class="verify-button" onclick="window.location.href = '${url}';">
                      Verify my account
                  </button>

                  <p class="info-text">
                      Thank you <br />
                      © 2025 Carp Team
                  </p>
                  <p class="footer2">If you are having trouble clicking the "Activate" button, copy and paste
                      the following link into your browser:</p>

                  <div class="footer">
                      <a class="footer-text" href="${url}">
                          ${url}
                      </a>
                  </div>
              </div>
          </div>
      </body>
      </html>
      `;
  }

export { VerificationMailForm };
