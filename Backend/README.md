## 📦 Packages Used

Below is the list of npm packages used in this backend project:

### 🔧 Core Setup
- **express** – Minimalist web framework for Node.js

### 🔐 Authentication & Authorization
- **bcrypt** – Password hashing
- **jsonwebtoken** – JWT-based token handling
- **dotenv** – Manage environment variables securely

### 🛠️ Development Tools
- **nodemon** – Automatically restarts server on code changes (dev only)

### 🗄️ Database
> Use either based on your database type:

#### MongoDB
- **mongoose** – MongoDB object modeling tool

### 📤 File Uploads
- **multer** – Handle multipart/form-data for file/image uploads

### 🧾 Validation & Parsing
- **cors** – Handle Cross-Origin Resource Sharing

<!-- ### 💳 Payments (Optional)
- **stripe** – Integrate payment gateway (Stripe) -->

---

### ✅ Example Install Command

```bash
npm install express mongoose dotenv bcrypt jsonwebtoken multer cors cookie-parser express-validator
npm install --save-dev nodemon