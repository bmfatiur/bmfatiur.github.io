---
layout: page
title: "🧠 SleepWell: A Machine Learning Web App for Early Detection of Sleep Disorders"
description: "ML-based sleep disorder detection app"
img: /assets/img/projects/sleep-disorder-dataset.png
importance: 201
category: academic
---

<p align="center">
  <img src="/assets/img/projects/sleep-disorder-dataset.png" alt="Sleep Disorder Dataset Preview" style="max-width: 70%; border-radius: 8px;" />
</p>

**SleepWell** is a Laravel-powered web application designed to support the **early detection of sleep disorders** through machine learning. It integrates a trained **Random Forest Classifier** served via Flask to deliver fast, interpretable predictions from basic health and lifestyle indicators.

With an intuitive user interface and a Laravel-managed **admin panel**, the system enables both users and administrators to interact with predictions and analyze behavioral trends securely and efficiently.

---

### 🔍 Core Features

- **Real-time prediction** of potential sleep disorders based on inputs like age, gender, daily steps, and occupation.
- **Seamless integration** of a Python-based ML model into a modern Laravel frontend.
- **RESTful API endpoint** (`/predictsleep`) accepting structured input and returning categorical predictions.
- **Secure admin panel** for overseeing user submissions, logs, and inference history.

---

### 🧪 Model Performance

The Random Forest Classifier was trained on a curated dataset with the following performance:

```
Accuracy  : 0.87
Precision : 0.86 (class 0), 0.88 (class 1)
Recall    : 0.86 (class 0), 0.88 (class 1)
F1-Score  : 0.87
```

This reflects a strong balance between sensitivity and specificity—critical for early detection use cases.

---

### 🛠️ Tech Stack

- **Backend ML**: Python, Flask, Scikit-learn, Pandas, Joblib  
- **Web Application**: Laravel, MySQL, Blade Templates  
- **Visualization**: Matplotlib  
- **Storage & Deployment**: Structured dataset ingestion, model serialization, and API consumption  
- **Data Pipeline**: Label Encoding, Random Forest Classification, Test-Train Split, JSON I/O

---

### 🧬 Key Training Snippet

```python
X = df[['Age', 'Gender', 'DailySteps', 'Occupation']]
y = df['Sleep Disorder']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = RandomForestClassifier()
model.fit(X_train, y_train)
joblib.dump(model, 'rf_sleep_model.pkl')
```

Prediction logic (served from Flask endpoint):

```python
@app.route('/predictsleep', methods=['POST'])
def predict_sleep():
    # Input parsing, label encoding, prediction, and response
```

---

SleepWell bridges **data science** and **healthcare accessibility**, offering a scalable solution that encourages proactive wellness decisions using machine intelligence.

---

🧠 Model training source: [![ML Model Repo](https://img.shields.io/badge/Model_Code-GitHub-2ea44f?style=for-the-badge&logo=github)](https://github.com/bmfatiur/Sleep-Disorder-Prediction-ML)

🌐 Web application source: [![Web App Repo](https://img.shields.io/badge/Web_App-GitHub-0366d6?style=for-the-badge&logo=github)](https://github.com/bmfatiur/Sleep-Disorder-Prediction)

---
