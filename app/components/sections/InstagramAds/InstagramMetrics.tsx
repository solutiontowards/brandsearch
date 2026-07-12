import {
  Users,
  Eye,
  TrendingUp,
  Star,
} from "lucide-react";

type InstagramMetricsProps = {
  revenue: string;
  views: string;
  likes: string;
  rating: string;
};

export default function InstagramMetrics({
  revenue,
  views,
  likes,
  rating,
}: InstagramMetricsProps) {
  return (
    <div className="mt-4 flex items-center gap-2">
      {/* Revenue */}
      <div className="flex h-8 items-center gap-1 rounded-full bg-[#DDF8E5] px-3">
        <Users size={14} className="text-[#38CA6E]" />

        <span className="text-[13px] font-medium text-[#38CA6E]">
          {revenue}
        </span>
      </div>

      {/* Views */}
      <div className="flex h-8 items-center gap-1 rounded-full bg-[#F2F2F2] px-3">
        <Eye size={14} className="text-[#7B7B7B]" />

        <span className="text-[13px] font-medium text-[#5A5A5A]">
          {views}
        </span>
      </div>

      {/* Likes */}
      <div className="flex h-8 items-center gap-1 rounded-full bg-[#EEF2FF] px-3">
        <TrendingUp size={14} className="text-[#5B7FFF]" />

        <span className="text-[13px] font-medium text-[#5B7FFF]">
          {likes}
        </span>
      </div>

      {/* Rating */}
      <div className="flex h-8 items-center gap-1 rounded-full bg-[#EEF2FF] px-3">
        <Star
          size={12}
          fill="#4F6BFF"
          className="text-[#4F6BFF]"
        />

        <span className="text-[12px] font-medium tracking-[2px] text-[#4F6BFF]">
          {rating}
        </span>
      </div>
    </div>
  );
}