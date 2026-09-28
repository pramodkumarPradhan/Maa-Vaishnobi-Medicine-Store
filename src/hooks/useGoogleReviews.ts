import { useState, useEffect } from "react";
import { BUSINESS_INFO } from "../data/businessInfo";

const STORAGE_KEY = "maa_vaishnobi_google_reviews_count";

export function useGoogleReviews() {
  const [reviewsCount, setReviewsCount] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed >= BUSINESS_INFO.googleRating.reviewsCount) {
          return parsed;
        }
      }
    } catch {
      // Fallback to default count if localStorage is unavailable
    }
    return BUSINESS_INFO.googleRating.reviewsCount;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, reviewsCount.toString());
    } catch {
      // ignore
    }
  }, [reviewsCount]);

  const handlePostReview = () => {
    // Increment local count automatically when user clicks to post on Google
    setReviewsCount((prev) => prev + 1);
    // Open Google Review Link in a new tab
    window.open(BUSINESS_INFO.googleRating.reviewsUrl, "_blank", "noopener,noreferrer");
  };

  return {
    score: 5.0,
    starsDisplay: "★★★★★",
    reviewsCount,
    reviewsUrl: BUSINESS_INFO.googleRating.reviewsUrl,
    handlePostReview,
  };
}
