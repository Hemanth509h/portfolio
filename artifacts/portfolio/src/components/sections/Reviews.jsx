import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Star, Quote } from "lucide-react";

function ReviewCard({ review, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-panel p-6 rounded-3xl flex flex-col gap-4 hover:border-primary/30 transition-colors relative"
    >
      <Quote className="absolute top-5 right-5 w-6 h-6 text-primary/20" />
      <div className="flex items-center gap-1">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
        "{review.review}"
      </p>
      <div className="flex items-center gap-3 pt-2 border-t border-white/5">
        <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary text-xs font-bold flex-shrink-0">
          {review.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{review.name}</p>
          <p className="text-xs text-muted-foreground">
            {review.role} · {review.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function SkeletonCard() {
  return (
    <div className="glass-panel p-6 rounded-3xl flex flex-col gap-4 animate-pulse">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="w-4 h-4 rounded-full bg-white/10" />
        ))}
      </div>
      <div className="space-y-2 flex-grow">
        <div className="h-3 bg-white/10 rounded w-full" />
        <div className="h-3 bg-white/10 rounded w-5/6" />
        <div className="h-3 bg-white/10 rounded w-4/6" />
      </div>
      <div className="flex items-center gap-3 pt-2 border-t border-white/5">
        <div className="w-10 h-10 rounded-full bg-white/10" />
        <div className="space-y-1">
          <div className="h-3 bg-white/10 rounded w-24" />
          <div className="h-2 bg-white/10 rounded w-32" />
        </div>
      </div>
    </div>
  );
}

export function ReviewsSection() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch reviews");
        return res.json();
      })
      .then((json) => {
        setReviews(json.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section id="reviews" className="py-24 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Reviews"
          subtitle="What people say about working with me"
        />

        {error && (
          <p className="text-center text-muted-foreground text-sm">{error}</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : reviews.map((review, index) => (
                <ReviewCard key={review.id} review={review} index={index} />
              ))}
        </div>
      </div>
    </section>
  );
}
