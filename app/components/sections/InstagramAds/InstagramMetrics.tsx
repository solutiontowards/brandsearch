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
    <div className=" flex items-center gap-2">
      {/* Revenue */}
      <div className="flex h-8 items-center gap-1 rounded-[20px] bg-[#38CA6E26] px-3">
        <Users size={14} className="text-[#38CA6E]" />

        <span className="text-[14px] leading-5 font-medium text-[#38CA6E]">
          {revenue}
        </span>
      </div>

      {/* Views */}
      <div className="flex h-8 items-center gap-1 rounded-full bg-[#56565A26] px-3">
        <Eye size={14} className="text-[#7B7B7B]" />

        <span className="text-[14px] leading-5 font-medium text-[#5A5A5A]">
          {views}
        </span>
      </div>

      {/* Likes */}
      <div className="flex h-7 items-center gap-1 rounded-full bg-[#607FF826] px-3">
        <TrendingUp size={14} className="text-[#3253F0]" />

        <span className="text-[14px] leading-5 font-medium text-[#3253F0]">
          {likes}
        </span>
      </div>

      {/* Rating */}
      <div className="flex h-7 items-center gap-[2px] rounded-full bg-[#607FF826] px-3">
        <Star
          size={12}
          fill="#4F6BFF"
          className="text-[#3253F0]"
        />
        <Star
          size={12}
          fill="#4F6BFF"
          className="text-[#3253F0]"
        />
        <Star
          size={12}
          fill="#4F6BFF"
          className="text-[#3253F0]"
        />

        <Star
          size={12}
          fill="#4F6BFF"
          className="text-[#3253F0]"
        />
        <Star
          size={12}
          fill="#4F6BFF"
          className="text-[#3253F0]"
        />


        {/* <span className="text-[12px] font-medium  text-[#3253F0]">
          {rating}
        </span> */}
      </div>
    </div>
  );
}