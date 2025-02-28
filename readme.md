# Lazy Dev - Where Contributions Turn into Rewards!  

## 🌟 Introduction  

Have you ever dreamed of making an impact in the open-source world, pouring your heart into promising projects, only to feel that… **it all goes unnoticed**?  

You fix bugs, add features, and contribute your best—but without recognition or clear incentives, the fire of passion slowly fades.  

🔥 **Lazy Dev is here to change that!**  

We don’t just acknowledge **every line of code you write**—we also **reward you fairly** for the value you bring. You'll find **excitement and motivation** in your contributions, while open-source projects grow stronger and more complete than ever before.  

---  

## ❌ The Current Problem  

Many promising open-source projects are struggling with:  
🚧 **A lack of consistent contributions.**  
🐞 **Unresolved bugs piling up.**  
💤 **Developers losing motivation over time.**  

At first, enthusiasm runs high. But without **clear incentives**, contributions start to dwindle.  

---  

## ✅ How Lazy Dev Fixes This  

🔹 **Fostering collaboration.**  
🔹 **Recognizing and rewarding meaningful contributions.**  
🔹 **Creating a fun and competitive environment.**  

💡 With **Lazy Dev**, you're no longer coding alone—you’re part of **a movement that makes a difference!** 🚀  

---  

## ⚒️ How Lazy Dev Works  

Ever wanted to contribute to open-source but found it boring? **Lazy Dev will change that!**  

### 🎯 More Than Just Contributing—It’s a Game!  
Simply **link your repository** to **Lazy Dev**, and we’ll help your project reach more developers. They can join, fix bugs, and add features—but instead of just doing it the usual way, it now becomes **a thrilling competition!**  

### 🏆 Climb the Leaderboards & Earn Rewards  
**Lazy Dev** turns your contributions into **points**, allowing you to compete with other developers through:  
- **📊 Leaderboards**: Updated weekly, monthly, and annually.  
- **🥇 Medals & Achievements**: Recognizing the top contributors.  
- **🎁 Meaningful Rewards**: More than just recognition—real value for your efforts.  

### 💡 Contributions That Matter  
With **Lazy Dev**, every line of code you write brings **motivation & value**.  
- **Compete to become a top developer.**  
- **Get rewarded for your hard work.**  
- **Stay engaged and passionate about open-source.**  

---

## 🖥️ System  

### 🏗️ System Architecture  
**Lazy Dev** is built on a **microservices architecture**, ensuring flexibility, maintainability, and high performance even as the number of projects and developers grows rapidly.  

💡 **Why microservices?**  
- 🛠️ **Clear separation** of services: Each core function, such as PR processing, reward management, and user authentication, operates independently.  
- 🚀 **Scalability**: As the platform expands, we can add or upgrade individual services without disrupting the entire system.  
- 🔄 **High reliability**: If one service encounters an issue, the rest of the system remains functional.  

---

### 🖥️ Technologies & Programming Languages  

Lazy Dev leverages **modern technologies** to ensure optimal performance and user experience:  

- **🔹 Backend:** `Express.js` + `TypeScript` → A fast, powerful, and scalable API.  
- **🔹 Frontend:** `ReactJS` → Smooth, intuitive UI with an optimized user experience.  
- **🔹 Database:** `PostgreSQL` + `Prisma` → Secure storage, flexible queries, and easy scalability.  
- **🔹 Event Streaming:** `Kafka` → Ensures real-time event processing, allowing the system to respond quickly to critical updates.  
- **🔹 Mail Service:** `Resend` → Reliable email delivery for notifications, authentication, and system updates.  
- **🔹 zkTLS Proxy:** `Circom` + `SnarkJS` → Enables **privacy-preserving authentication** and **secure user verification** without exposing sensitive data.  

With this tech stack, **Lazy Dev** is not only robust but also adaptable to the ever-evolving demands of the open-source community. 🚀  

### 🔐 zkTLS  

**Lazy Dev** uses **zkTLS** to verify the authenticity of contributions without revealing personal information or sensitive project details.  

#### 🚀 Why do we use zkTLS?  

**zkTLS** (Zero-Knowledge Transport Layer Security) is a technology that combines TLS with Zero-Knowledge Proofs (ZKPs), allowing data verification without exposing sensitive information. Here’s why we chose zkTLS for Lazy Dev:  

##### 🛡️ 1. Privacy Protection  
- zkTLS enables us to verify contributions (e.g., merged PRs) without accessing or storing developers' personal information (such as email, real name) or sensitive project details (such as source code).  
- This aligns with the philosophy of an unstoppable application: minimizing centralized data and increasing user control.  

##### ⚖️ 2. Transparency & Fairness  
- With zkTLS, we can prove that a contribution meets reward criteria (merged PRs, closed issues) **without exposing unnecessary details**. This eliminates the possibility of fraud or bias in reward distribution.  

##### 🔗 3. Seamless Integration with GitHub  
- zkTLS allows us to utilize data from GitHub (such as GitHub ID, PR status) via a secure proxy server, transforming web2 information into verifiable proofs within a web3 environment.  

##### 🏎️ 4. Efficiency & Security  
- By leveraging the **zkTLS Proxy model**, we reduce latency compared to more complex models like MPC while maintaining a **high level of security** through Zero-Knowledge proofs.  

### 🛠️ How Do We Use zkTLS?  

Lazy Dev implements zkTLS through a **zkTLS Proxy Server** to handle contribution verification. Here’s how the system works:  

### 🔄 Implementation Workflow  

#### 1️⃣ **User Registration & GitHub Linking**  
- When a user registers on Lazy Dev and links their GitHub account, the system uses their **GitHub ID** to generate an initial **zk-proof**.  
- This proof links the user’s identity to their Lazy Dev account without storing personal information.  

#### 2️⃣ **GitHub Contribution Notification**  
- Whenever a user submits a PR or fixes an issue, a **GitHub Action** set up in the repository **sends a notification** to the **zkTLS Proxy Server**.  
- This notification contains data such as the GitHub ID and contribution status (e.g., PR merged, issue closed).  

#### 3️⃣ **Generating zk-Proof via zkTLS**  
- The zkTLS Proxy Server receives the information from GitHub Actions, extracts the GitHub ID, and generates a **new zk-proof**.  
- This proof confirms that a valid contribution has been made **without revealing specific details** (e.g., PR content or source code).  

#### 4️⃣ **Verification & Reward Distribution**  
- The zk-proof is sent to the **Lazy Dev Main Server**.  
- The Main Server verifies the proof, matches it with the registered GitHub ID, and **distributes rewards (tokens)** accordingly.  

### 🔍 System Flow Diagram  

![alt text](image-1.png)  

### 🌟 Benefits of This Approach  

✅ **Privacy-Preserving:** The entire process relies only on the GitHub ID and zk-proofs—no sensitive data is accessed.  
✅ **Fully Automated:** **GitHub Actions** and **zkTLS Proxy Server** handle everything, minimizing manual intervention.  
✅ **Scalability:** The system can process **thousands of contributions** without affecting performance.  

---

## Technical

### Notes Before Installation (Very Important) ⚠️

Because we use many external services, please ensure to obtain the **API keys** from the following services before installation. We have an example ```.env.development``` file in each service; you just need to get the **API keys** and fill them in.

- **Resend** API key (Free)🔑.
- ***serviceAccountKey, API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_ID, APP_ID, MEASUREMENT_ID*** from  **Firebase** 🔥.
- Create a **Github application** and **Github oauth app** and obtain the following information:
  - **Github application**:
    - APP_ID
    - APP_CLIENT_ID
    - APP_CLIENT_SECRET
    - APP_PRIVATE_KEYS
    - APP_WEBHOOK_SECRET
  - **Github oauth app**: OAUTH_CLIENT

### Installation 🚀

- Go to each service and use the command ``yarn`` to install the necessary dependencies for each service.
- Create a PostgreSQL server and link it to the **DB_URL** section in each ``.env.development`` file.
- Run the Backend servers with the command: ``yarn start:dev``. Run the Frontend server with the command: ``yarn dev``.

### Sample ENV Files
- **Users Service ENV**:
  - ***.env.development***:
  ```
  DATABASE_URL="postgresql://postgres:password@localhost:5432/postgres?schema=schema_name"

  # HOST
  LOCALHOST="http://localhost"
  PORT=3080

  # KEY
  MAIL_API_KEY=API_KEY_HERE

  ACCESS_KEY=Ms_HSj!kjbas983nib!G8N_!bbyu21v3cvvyu21!_v7V218Y!BI!_bh!IoVGC_hvbjh^MAuOPJ2ijo!b2

  # Kafka
  KAFKA_HOST="localhost:9092"
  CLIENT_ID="project_owner_dev"

  # SECRECT KEY
  SECRECT=h4Ha!haVePu22Y!_!sU3omkI1^k@jIm4NNb*23B!bd1bivb!nnu_bub8BV_!bdh*bbfwbguHBwUhuB3273bvdsu3!_nan4naNa4nHd0mixi!

  # firebase
  API_KEY=API_KEY_HERE
  AUTH_DOMAIN=AUTH_DOMAIN_HERE
  PROJECT_ID=PROJECT_ID_HERE
  STORAGE_BUCKET=STORAGE_BUCKET_HERE
  MESSAGING_ID=MESSAGING_ID_HERE
  APP_ID=APP_ID_HERE
  MEASUREMENT_ID=MEASUREMENT_ID_HERE

  ```

- **project_owner_service ENV**:
  - ***.env.development***:
  ```
  # database
  DATABASE_URL="postgresql://postgres:password@localhost:5432/postgres/LazyDev?schema=project_owner"

  # platform 
  LAZY_KEY="33b3BI43!nb_n3hN#-@n43_3bn43Jbn43O_434/nrnb@Biub981nol_n9812^09932nfoap_!n#0NiGG4"
  SECRECT=h4Ha!haVePu22Y!_!sU3omkI1^k@jIm4NNb*23B!bd1bivb!nnu_bub8BV_!bdh*bbfwbguHBwUhuB3273bvdsu3!_nan4naNa4nHd0mixi!

  # host
  LOCAL="http://localhost"
  PUBLIC=""
  PORT="3180"

  # Kafka
  KAFKA_HOST="localhost:9092"
  CLIENT_ID="project_owner_dev"

  #oauth
  OAUTH_CLIENT=GITHUB_OAUTH_CLIENT_ID

  #github
  APP_ID=APP_ID
  APP_CLIENT_ID=APP_CLIENT_ID
  APP_CLIENT_SECRET=APP_CLIENT_SECRET
  APP_PRIVATE_KEYS=APP_PRIVATE_KEYS
  APP_WEBHOOK_SECRET=APP_WEBHOOK_SECRET
  ```

- **contributor_service ENV**:
  - ***.env.development***:
  ```
  # database
  DATABASE_URL="postgresql://postgres:password@localhost:5432/postgres/LazyDev?schema=contributor"

  # platform 
  LAZY_KEY="33b3BI43!nb_n3hN#-@n43_3bn43Jbn43O_434/nrnb@Biub981nol_n9812^09932nfoap_!n#0NiGG4"
  SECRECT=h4Ha!haVePu22Y!_!sU3omkI1^k@jIm4NNb*23B!bd1bivb!nnu_bub8BV_!bdh*bbfwbguHBwUhuB3273bvdsu3!_nan4naNa4nHd0mixi!

  # host
  LOCAL="http://localhost"
  PUBLIC=""
  PORT="3280"

  # Kafka
  KAFKA_HOST="localhost:9092"
  CLIENT_ID="project_owner_dev"

  #oauth
  OAUTH_CLIENT=GITHUB_OAUTH_CLIENT_ID
  ```