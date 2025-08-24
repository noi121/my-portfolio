// src/data/projects.js

export const projects = [
  {
    id: "house-price-ml",
    slug: "house-price-ml",
    title: "House Price Prediction",
    summary:
      "End-to-end regression pipeline predicting house prices with feature engineering and XGBoost.",
    tags: ["Regression", "ML", "Python"],
    heroImage: null, // replace with "/images/house-price-hero.png"
    links: {
      github: "https://github.com/youruser/house-price-ml",
      demo: null,
      report: null,
    },
    facts: {
      role: "Data Scientist",
      timeline: "Jan–Mar 2025",
      tools: ["Python", "pandas", "scikit-learn", "XGBoost", "Matplotlib"],
      dataset: "Kaggle House Prices (1460 rows)",
      difficulty: "Intermediate",
    },
    content: {
      overview:
        "Built a baseline → engineered features → tuned XGBoost → evaluated with cross-validation.",
      problem:
        "Predict sale price from tabular property features for better pricing decisions.",
      approach:
        "Preprocessing (nulls, encoders), target log-transform, k-fold CV, hyperparameter tuning.",
      results: [
        { label: "Cross-val RMSE", value: "0.129" },
        { label: "Kendall τ", value: "0.71" },
      ],
      challenges:
        "Data leakage risks and handling skewed features while keeping training stable.",
      nextSteps:
        "Stacking models, SHAP explanations, simple Streamlit app for predictions.",
    },
    gallery: [
      { src: "/images/house-price-feature-importances.png", caption: "Feature importances" },
    ],
  },

  // 🔽 NEW PROJECT
  {
    id: "nlp-sentiment-analyzer",
    slug: "nlp-sentiment-analyzer",
    title: "NLP Sentiment Analyzer",
    summary:
      "Fine-tuned transformer model to classify sentiment on product reviews with an interactive demo.",
    tags: ["NLP", "Transformers", "Python"],
    heroImage: null, // optional
    links: {
      github: "https://github.com/youruser/nlp-sentiment-analyzer",
      demo: null,     // e.g., "https://your-demo.com"
      report: null,   // e.g., a PDF report link
    },
    facts: {
      role: "ML Engineer",
      timeline: "Apr–May 2025",
      tools: ["Python", "PyTorch", "Hugging Face", "scikit-learn", "FastAPI/Streamlit"],
      dataset: "Amazon reviews subset (balanced 100k samples)",
      difficulty: "Intermediate–Advanced",
    },
    content: {
      overview:
        "Built a sentiment classifier on review text using a pretrained transformer, with lightweight serving.",
      problem:
        "Classify customer sentiment (positive/negative/neutral) to support product and support teams.",
      approach:
        "Tokenization with fast tokenizer, stratified split, class weighting, linear warmup, early stopping.",
      results: [
        { label: "Test accuracy", value: "93.4%" },
        { label: "Macro F1", value: "0.92" },
      ],
      challenges:
        "Addressing domain shift, mitigating overfitting on short reviews, and handling sarcasm/negation.",
      nextSteps:
        "Add explainability (LIME/SHAP), expand to aspect-based sentiment, and deploy with a small GPU.",
    },
    gallery: [
      { src: "/images/nlp-sentiment-confusion.png", caption: "Confusion matrix" },
      { src: "/images/nlp-sentiment-pr-curve.png", caption: "PR curve" },
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
