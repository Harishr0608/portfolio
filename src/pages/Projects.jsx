function Project({ title, when, problem, approach, tech, links }){
return (
<article className="card glow-card project">
<div className="project-head">
<h3>{title}</h3>
<span className="badge badge-soft">{when}</span>
</div>
<p className="kicker">Problem</p>
<p>{problem}</p>
<p className="kicker">Approach</p>
<p>{approach}</p>
<p className="meta"><strong>Tech:</strong> {tech}</p>
{links && (
<p className="meta links">
{links.map(({label, href}) => (
<a className="link-pill" key={label} href={href} target="_blank" rel="noreferrer">{label}</a>
))}
</p>
)}
</article>
)
}

export default function Projects(){
return (
<section className="section">
<h2>Projects</h2>
<div className="grid">
<Project
  title="Real‑Time Multi‑Source RAG Chatbot"
  when="07/2025"
  problem="Organizations struggle to efficiently query and extract insights from diverse document formats including PDFs, Word documents, Excel files, web content, and YouTube videos. Traditional search systems and chatbots lack the ability to provide accurate, context-aware, and source-attributed answers from heterogeneous knowledge sources, leading to information silos, reduced productivity, and inefficient knowledge management workflows across different document types and data repositories."
  approach="Developed a production-ready Retrieval-Augmented Generation (RAG) system using modular LangGraph agents for orchestrating complex document ingestion workflows across multiple source types. Implemented asynchronous processing pipeline with OpenAI embeddings stored in persistent ChromaDB vector database for efficient similarity search and retrieval. Built comprehensive FastAPI backend with RESTful endpoints for document upload, processing status tracking, and query handling. Created intelligent chunking strategies with configurable overlap for optimal context preservation. Integrated query reformulation techniques to enhance retrieval accuracy before vector search. Developed intuitive Streamlit frontend enabling users to upload documents, interact with the chatbot, and receive source-attributed responses with real-time processing feedback. Containerized entire application stack using Docker for seamless deployment, scalability, and environment consistency."
  tech="Python, LangGraph, OpenAI API, ChromaDB, FastAPI, Streamlit, Docker, Async Processing, Retrieval-Augmented Generation, Vector Databases, Document Processing, Natural Language Processing"
  links={[{label:'GitHub', href:'https://github.com/Harishr0608/Real-Time-Multi-Source-RAG-Chatbot'}]}
/>

<Project
  title="Text Enhancement System"
  when="04/2025"
  problem="Content creators, writers, and professionals across various domains struggle with ensuring text quality, grammatical accuracy, style consistency, and readability optimization. Manual proofreading and editing are time-consuming, error-prone, and may miss subtle linguistic issues or stylistic improvements. Organizations need automated, scalable solutions that can process diverse content types while maintaining context awareness and providing actionable enhancement suggestions."
  approach="Developed a comprehensive text enhancement system using modular agent-based architecture with specialized processing modules. Implemented multiple enhancement agents including grammar correction, style analysis, readability scoring, and contextual improvement suggestions using advanced natural language processing techniques. Integrated transformer-based language models and leveraged Google's language processing APIs for robust text analysis. Built asynchronous processing pipeline for handling multiple text enhancement tasks simultaneously. Created intuitive Streamlit web interface enabling users to input text, select enhancement preferences, and receive real-time suggestions with explanations and confidence scores."
  tech="Python, Transformers, Google ADK Agent, Natural Language Processing, Agent-Based Architecture, Streamlit, Async Programming, Text Processing, Grammar Correction, Style Analysis, Readability Assessment"
  links={[{label:'GitHub', href:'https://github.com/Harishr0608/Text-Enhancement-System'}]}
/>

<Project
  title="Big Mart Sales Prediction"
  when="05/2024"
  problem="Retail chains like Big Mart struggle with accurate sales forecasting across multiple outlets with varying characteristics, customer demographics, product categories, and store locations. Inaccurate sales predictions lead to inventory mismanagement including overstocking or stockouts, resulting in significant revenue losses, increased holding costs, poor customer satisfaction, and inefficient supply chain operations that impact overall business profitability."
  approach="Developed a comprehensive machine learning solution for retail sales prediction using the Big Mart dataset containing store-level and product-level features. Performed extensive data preprocessing including handling missing values through strategic imputation (mode for categorical, median for numerical), outlier detection and treatment, and categorical variable encoding using Label Encoding and One-Hot Encoding. Implemented feature engineering techniques including creation of new variables like Item_MRP_clusters, outlet establishment years calculation, and product visibility optimization. Applied multiple regression algorithms including Linear Regression, Decision Trees, Random Forest, and XGBoost with hyperparameter tuning using GridSearchCV. Evaluated models using RMSE, MAE, and R-squared metrics, achieving optimal performance with XGBoost regressor for accurate sales forecasting."
  tech="Python, Pandas, NumPy, Scikit-learn, XGBoost, Linear Regression, Decision Trees, Random Forest, GridSearchCV, Label Encoding, One-Hot Encoding, Feature Engineering, Data Preprocessing, Matplotlib, Seaborn, RMSE, MAE"
  links={[{label:'GitHub', href:'https://github.com/Harishr0608/Big-Mart-Sales-Prediction'}]}
/>

<Project
  title="Loan Approval Prediction"
  when="05/2024"
  problem="Traditional loan approval processes in banking institutions are time-consuming, subjective, and prone to human bias, leading to inconsistent decision-making and potential financial risks. Financial institutions need an automated, objective system to evaluate loan applications based on applicant profiles, financial indicators, and credit history to reduce default rates while ensuring fair and efficient lending decisions that minimize both false positives and false negatives."
  approach="Developed a comprehensive machine learning solution for loan approval prediction using applicant demographic, financial, and credit history data. Performed extensive data preprocessing including handling missing values through strategic imputation, categorical variable encoding using label and one-hot encoding techniques, and feature scaling for numerical variables. Implemented feature engineering to create new creditworthiness indicators and risk assessment metrics. Applied and compared multiple classification algorithms including Logistic Regression, Decision Trees, Random Forest, and XGBoost classifiers. Conducted hyperparameter optimization using GridSearchCV and applied k-fold cross-validation for robust model evaluation. Achieved 95.05% accuracy with XGBoost while maintaining model interpretability through feature importance analysis and SHAP values for explainable AI in financial decision-making."
  tech="Python, Pandas, NumPy, Scikit-learn, XGBoost, Logistic Regression, Decision Trees, Random Forest, GridSearchCV, Cross-validation, SHAP, Feature Engineering, Data Preprocessing, Matplotlib, Seaborn"
  links={[{label:'GitHub', href:'https://github.com/Harishr0608/Loan-Approval-Prediction'}]}
/>

<Project
  title="Child Mortality Prediction"
  when="10/2024"
  problem="High child mortality rates in developing regions require early identification of at-risk children to enable timely medical interventions and healthcare resource allocation. Healthcare systems and policymakers need predictive models to analyze multiple socioeconomic, demographic, and health-related factors that contribute to child mortality risks, allowing for targeted preventive care strategies, policy interventions, and optimized allocation of limited medical resources to save lives."
  approach="Developed a comprehensive machine learning solution analyzing multi-dimensional child mortality datasets including demographic factors, socioeconomic indicators, maternal health metrics, healthcare access, and regional statistics. Performed extensive exploratory data analysis and feature engineering to identify key mortality predictors. Implemented and compared multiple machine learning algorithms including Random Forest, XGBoost, Logistic Regression, and Support Vector Machine classifiers to predict mortality risk factors. Applied advanced preprocessing techniques including handling missing values, categorical encoding, feature scaling, and correlation analysis. Created a full-stack web application using Django framework for model deployment, enabling healthcare professionals to input patient data and receive risk assessments with confidence intervals."
  tech="Python, Pandas, NumPy, Scikit-learn, XGBoost, Random Forest, Logistic Regression, SVM, Matplotlib, Seaborn, Feature Engineering, Data Preprocessing, EDA, Django, Web Development"
  links={[{label:'GitHub', href:'https://github.com/Harishr0608/Child-Mortality-Prediction'}]}
/>

<Project
  title="Real‑Time Face Mask Detection"
  when="06/2023"
  problem="During health crises like COVID-19, public spaces, workplaces, transportation hubs, and institutions need automated systems to monitor mask compliance in real-time for safety protocols. Manual monitoring is labor-intensive, inconsistent, and impractical for large-scale deployment, while ensuring public health safety requires efficient detection systems that can process multiple faces simultaneously across varying lighting conditions, face orientations, and mask types."
  approach="Developed a comprehensive real-time face mask detection system using deep learning and computer vision techniques. Implemented a two-stage detection pipeline combining OpenCV's DNN module with Single Shot MultiBox Detector (SSD) using MobileNetV2 backbone for efficient face detection. Trained a custom CNN classifier on a dataset of over 11,000 images containing faces with and without masks. Applied data augmentation techniques and fine-tuned the MobileNetV2 architecture to achieve 92.64% accuracy with F1-score of 0.93. Integrated OpenCV for real-time video stream processing, enabling simultaneous detection of multiple faces with color-coded bounding boxes indicating mask compliance status."
  tech="Python, TensorFlow/Keras, OpenCV, MobileNetV2, Single Shot MultiBox Detector (SSD), CNN, Computer Vision, Real-time Video Processing, Data Augmentation, Jupyter Notebook"
  links={[{label:'GitHub', href:'https://github.com/Harishr0608/Real-time-Face-Mask-Detection'}]}
/>

<Project
  title="Spam Mail Prediction"
  when="04/2024"
  problem="Email systems are overwhelmed with spam messages that compromise user productivity, consume network bandwidth, and pose security risks through phishing attempts and malware distribution. Traditional rule-based spam filters are easily bypassed by sophisticated spam techniques and evolving attack patterns, requiring intelligent machine learning approaches that can adapt to new spam strategies and protect users effectively while minimizing false positives that could block legitimate emails."
  approach="Developed a comprehensive spam email detection system using advanced natural language processing and machine learning techniques on the SMS Spam Collection dataset. Implemented extensive text preprocessing pipeline including data cleaning, tokenization, stop word removal, stemming using NLTK, and handling of text normalization. Applied TF-IDF vectorization for feature extraction to convert text data into numerical representations suitable for machine learning algorithms. Evaluated multiple classification algorithms including Naive Bayes, Logistic Regression, Support Vector Machine, and Random Forest classifiers. Achieved optimal performance with Multinomial Naive Bayes classifier, reaching 98.49% accuracy with excellent precision and recall scores for spam detection."
  tech="Python, Scikit-learn, NLTK, Pandas, NumPy, TF-IDF, Multinomial Naive Bayes, Logistic Regression, SVM, Random Forest, Text Preprocessing, Feature Extraction, Model Evaluation, Matplotlib, Seaborn"
  links={[{label:'GitHub', href:'https://github.com/Harishr0608/Spam-Mail-Prediction'}]}
/>

<Project
  title="Student Performance Prediction"
  when="04/2024"
  problem="Educational institutions struggle to identify students at risk of academic failure early enough to provide targeted interventions and support. Traditional grading systems only reflect past performance, while educators need predictive insights based on demographic factors, socioeconomic indicators, parental education levels, and academic history to implement personalized support strategies, optimize resource allocation, and improve overall student success rates across different academic subjects."
  approach="Developed a comprehensive machine learning solution analyzing student performance data including demographic information, parental education levels, socioeconomic factors, and academic history. Performed extensive exploratory data analysis to identify key factors influencing student academic outcomes. Implemented feature engineering techniques including categorical encoding for demographic variables and feature scaling for numerical data. Applied multiple regression and classification algorithms including Random Forest, XGBoost, CatBoost, Linear Regression, and Support Vector Regression to predict math scores. Conducted hyperparameter tuning and cross-validation to optimize model performance, achieving strong predictive accuracy with R-squared scores above 0.85."
  tech="Python, Pandas, NumPy, Scikit-learn, XGBoost, CatBoost, Random Forest, Linear Regression, SVR, Matplotlib, Seaborn, Feature Engineering, Hyperparameter Tuning, Cross-validation"
  links={[{label:'GitHub', href:'https://github.com/Harishr0608/Student-Performance-Prediction'}]}
/>

<Project
  title="Fake News Detection"
  when="04/2024"
  problem="The proliferation of misinformation and fake news across social media platforms and news websites poses significant threats to public opinion, democratic processes, and social stability. Manual fact-checking is too slow and resource-intensive to keep pace with the rapid spread of false information, requiring automated systems capable of identifying misleading content accurately and efficiently to protect users from misinformation and maintain information integrity."
  approach="Developed a comprehensive fake news detection system using advanced natural language processing and machine learning techniques. Implemented extensive text preprocessing pipeline including tokenization, stop word removal, stemming, and data cleaning to prepare news articles for analysis. Applied TF-IDF vectorization for feature extraction and evaluated multiple classification algorithms including Logistic Regression, Random Forest, Gradient Boosting, and Decision Tree classifiers. Performed comparative analysis of model performances using accuracy, precision, recall, and F1-score metrics to identify the optimal classifier. Implemented model deployment capabilities with probability scoring to provide confidence levels for predictions."
  tech="Python, Scikit-learn, NLTK, Pandas, NumPy, TF-IDF, Logistic Regression, Random Forest, Gradient Boosting, Decision Tree, Natural Language Processing, Text Preprocessing, Model Evaluation"
  links={[{label:'GitHub', href:'https://github.com/Harishr0608/Fake-News-Detection'}]}
/>

<Project
  title="Movie Recommendation System"
  when="04/2024"
  problem="Streaming platforms and entertainment services struggle to provide personalized movie recommendations that match user preferences and viewing history, leading to poor user engagement and satisfaction. Traditional recommendation approaches fail to capture complex user preferences, handle the cold start problem for new users, and effectively leverage both user behavior patterns and movie content features, resulting in irrelevant suggestions and reduced platform usage."
  approach="Implemented a comprehensive movie recommendation system using collaborative filtering techniques on the MovieLens dataset containing user ratings and movie metadata. Developed content-based filtering using TF-IDF vectorization to analyze movie features including genres, cast, and descriptions. Applied cosine similarity calculations to identify similar movies and users with comparable preferences. Built user-item matrix for collaborative filtering and implemented correlation analysis using Pandas to find users with similar movie preferences. Created an interactive interface allowing users to input movie preferences and receive personalized recommendations based on similarity scores."
  tech="Python, Pandas, NumPy, Scikit-learn, TF-IDF, Cosine Similarity, Collaborative Filtering, Content-Based Filtering, Correlation Analysis, Data Preprocessing"
  links={[{label:'GitHub', href:'https://github.com/Harishr0608/Movie-Recommendation-System'}]}
/>

<Project
  title="Sentiment Analysis of Amazon Reviews"
  when="04/2024"
  problem="E-commerce platforms process millions of product reviews daily, making it impossible to manually analyze customer sentiment and extract actionable insights for business decisions. Amazon needs automated systems to understand customer satisfaction levels, identify product issues, monitor brand reputation, and detect patterns in customer feedback to improve product quality, enhance customer experience, and make data-driven business decisions for inventory management and marketing strategies."
  approach="Implemented a comprehensive sentiment analysis pipeline processing Amazon product reviews using advanced natural language processing techniques. Performed extensive text preprocessing including data cleaning, tokenization, stop word removal, and lemmatization to prepare review data for analysis. Applied multiple sentiment analysis approaches including VADER sentiment analyzer for rule-based analysis, TextBlob for polarity detection, and custom machine learning models using TF-IDF vectorization with Support Vector Machine and Logistic Regression classifiers. Developed comparative analysis between different sentiment analysis tools to identify optimal approach for business applications."
  tech="Python, NLTK, TextBlob, VADER, Scikit-learn, Pandas, NumPy, TF-IDF, SVM, Logistic Regression, Matplotlib, Seaborn, Natural Language Processing"
  links={[{label:'GitHub', href:'https://github.com/Harishr0608/Sentiment-Analysis-of-Amazon-Reviews'}]}
/>

<Project
  title="Amazon Sales Report Data Analytics"
  when="03/2024"
  problem="E-commerce businesses like Amazon generate massive volumes of sales data across multiple product categories, regions, customer segments, and time periods, making it challenging to extract meaningful insights for strategic decision-making. Stakeholders need comprehensive analytics solutions to understand sales performance, identify profitable regions, analyze customer buying patterns, track seasonal trends, and optimize inventory management to maximize revenue and operational efficiency."
  approach="Developed a comprehensive data analytics solution processing Amazon sales datasets with extensive data cleaning and transformation using Tableau's data preparation tools. Created interactive dashboards featuring sales performance analysis by region, product categories, and time periods with drill-down capabilities. Implemented advanced visualizations including sales trend analysis, profit margin calculations, customer segmentation, and geographical sales distribution maps. Built KPI monitoring systems for revenue growth, units sold, profit margins, and regional performance with dynamic filtering and parameter controls for stakeholder-specific insights."
  tech="Tableau, Data Visualization, Interactive Dashboards, Statistical Analysis, Data Modeling, KPI Development, Geographical Mapping"
  links={[{label:'GitHub', href:'https://github.com/Harishr0608/Amazon-Sales-Report-Data-Analytics'}]}
/>

<Project
  title="Netflix Data Analytics"
  when="03/2024"
  problem="Streaming platforms like Netflix need comprehensive insights into their vast content library to make strategic decisions about content acquisition, production investments, and regional expansion. With over 8,000+ titles across different genres, countries, and time periods, stakeholders require interactive dashboards to understand content distribution patterns, release trends, viewer preferences, and market opportunities to optimize their content strategy and competitive positioning."
  approach="Developed an interactive Power BI dashboard analyzing Netflix's comprehensive content catalog including movies and TV shows data. Performed extensive data cleaning and transformation including handling missing values, date formatting, and categorical encoding using Power Query. Created dynamic visualizations showcasing content distribution by type, genre analysis, temporal release patterns, geographical content production trends, and duration analysis. Implemented interactive filters and slicers for country-wise analysis, year-over-year trends, and content type comparisons to enable stakeholders to derive actionable insights for content strategy decisions."
  tech="Power BI, Power Query, DAX, Data Modeling, Interactive Dashboards, Data Visualization, Statistical Analysis"
  links={[{label:'GitHub', href:'https://github.com/Harishr0608/Netflix-Data-Analytics'}]}
/>

<Project
  title="Football Match Prediction"
  when="12/2022"
  problem="Sports analysts, betting enthusiasts, and football clubs require accurate prediction models for match outcomes to make informed strategic and financial decisions. Traditional analysis methods are subjective and cannot effectively process large volumes of historical match data, team statistics, player performance metrics, and contextual factors like venue, weather, and team form to provide reliable predictions."
  approach="Developed a comprehensive machine learning pipeline analyzing historical match results, team performance statistics, and contextual factors including home/away advantage, recent form, and head-to-head records. Implemented data preprocessing techniques to handle missing values and categorical variables, followed by feature engineering to create meaningful predictors such as rolling averages of team performance, goal differences, and win/loss streaks. Applied multiple classification algorithms including Random Forest, Logistic Regression, and ensemble methods with cross-validation to predict match outcomes (win/draw/loss) and evaluated model performance using precision, recall, and accuracy metrics."
  tech="Python, Pandas, NumPy, Scikit-learn, Random Forest, Logistic Regression, Data Preprocessing, Feature Engineering, Cross-validation, Matplotlib, Seaborn"
  links={[{label:'GitHub', href:'https://github.com/Harishr0608/Football-Match-Prediction'}]}
/>

</div>
</section>
)
}
