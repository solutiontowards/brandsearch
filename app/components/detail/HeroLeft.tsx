import {
  Calendar,
  Globe,
  Package,
  Store,
  Sparkles,
  Smartphone,
  Code2,
  Users,
  MapPin,
  DollarSign,
} from "lucide-react";
import Image from "next/image";

export default function HeroLeft() {
  return (
    <div className="rounded-[10px] bg-[#FFFFFF] ps-[15px] pe-[14px] pt-[11px] pb-[17px]">
      {/* Banner */}
      <div className="relative overflow-hidden h-[192px] w-full overflow-hidden rounded-[15px]">
        <Image
          src="/image/product-details.png" // Replace with your image
          alt="Banner"
          width={100}
          height={100}
          className=" object-cover object-center h-full w-full"
        />

      </div>

      {/* Top Stats */}
      <div className="mt-5 grid grid-cols-3 gap-[10px]">
        <StatCard
          logo="/image/us-logo.png"
          icon={<MapPin size={14} />}
          title="UK"
          subtitle="Origin"
        />

        <StatCard
          icon={<Calendar size={14} />}
          title="6 Years"
          subtitle="Age"
        />

        <StatCard
          icon={<Package size={14} />}
          title="250"
          subtitle="Products"
        />
      </div>

      {/* Divider */}
      <div className="my-[18px] border-t border-[#00000014]" />

      {/* Details */}
      <InfoRow
        icon={<DollarSign size={18} />}
        label="Avg Price"
        value="USD $127K"
      />

      <InfoRow
        icon={<Calendar size={18} />}
        label="Created Date"
        value="Jun 09, 2026"
      />

      <StoreRow />

      <IconRow
        icon={<Sparkles size={18} />}
        label="Pixels"
        count="5"
        logos={[
          "/image/googleads.svg",
          "/image/meta-logo.svg",
        ]}
        more="+3"
      />

      <IconRow
        icon={<Smartphone size={18} />}
        label="Apps"
        count="24"
        logos={[
          "/image/app-1.svg",
          "/image/app-2.svg",
        ]}
        more="+20"
      />

      <IconRow
        icon={<Code2 size={18} />}
        label="Tech"
        count="42"
        logos={[
          "/image/tech_core.svg",
          "/image/tech_core.svg",
        ]}
        more="+40"
      />

      <FollowersRow />
    </div>
  );
}



function StatCard({
  icon,
  logo,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  logo?: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-[10px] border border-[#F5F5F5] bg-[#FAFAFA] p-[15px] pb-[14px]">
      <div className="flex items-center gap-2">
        {logo && (
          <Image
            src={logo}
            alt={title}
            width={16}
            height={16}
            className="h-[16px] w-[16px] object-cover rounded-full"
          />
        )}

        <p className="text-[18px] leading-[26px] font-medium text-[#141617] mb-[2.67px]">
          {title}
        </p>
      </div>

      <div className="flex items-center gap-2.5 text-[#808B96]">
        <div className="text-[#808B96]">{icon}</div>

        <span className="text-[14px] leading-5">{subtitle}</span>
      </div>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="mb-[10px] flex items-center justify-between rounded-[10px] border border-[#F5F5F5] bg-[#FAFAFA] ps-[9px] pe-[12px] py-[9px] h-[47px]">
      <div className="flex items-center gap-[10px]">
        <div className="text-[#000000]">{icon}</div>

        <span className="text-[16px] leading-[30px] font-normal text-[#3C3D51]">{label}</span>
      </div>

      <span className="text-[18px] leading-5 font-semibold text-[#000000]">
        {value}
      </span>
    </div>
  );
}

function StoreRow() {
  return (
    <div className="mb-[10px] flex items-center justify-between rounded-[10px] border border-[#F5F5F5] bg-[#FAFAFA] px-3 py-2 h-[47px]">
      <div className="flex items-center gap-3">
        <Store size={18} />

        <span className="text-[15px] text-[#4A4A4A]">Store</span>
      </div>

      <div className="flex items-center gap-[5px]">
        <Badge text="EN" />
        <Badge text="USD" />
        <Badge text="Dawn" />
      </div>
    </div>
  );
}

function IconRow({
  icon,
  label,
  count,
  logos,
  more,
}: {
  icon: React.ReactNode;
  label: string;
  count: string;
  logos: string[];
  more: string;
}) {
  return (
    <div className="mb-[10px] flex items-center justify-between rounded-[10px] border border-[#ECECEC] bg-[#FAFAFA] px-4 py-2 h-[47px]">
      <div className="flex items-center gap-3">
        {icon}

        <span className="text-[15px] text-[#4A4A4A]">
          {label}
          <span className="ml-[2px] text-[#808B96] text-[14px] font-normal">{count}</span>
        </span>
      </div>

      <div className="flex items-center gap-2">
        {/* {logos.map((logo) => (
          <Image
            key={logo}
            src={logo}
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 object-contain"
          />
        ))} */}
        {logos.map((logo, index) => (
  <Image
    key={index}
    src={logo}
    alt=""
    width={20}
    height={20}
    className="h-5 w-5 object-contain"
  />
))}

        <span className="ml-[10px] text-[13px]  text-[#808B96]">{more}</span>
      </div>
    </div>
  );
}

function FollowersRow() {
  return (
    <div className="flex items-center justify-between rounded-[10px] border border-[#ECECEC] bg-[#FAFAFA] px-4 py-2 h-[47px]">
      <div className="flex items-center gap-3">
        <Users size={18} />

        <span className="text-[15px] text-[#4A4A4A]">
          Followers
          <span className="ml-1 text-[#8B8B8B]">5</span>
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Image
            src="/image/youtube.svg"
            alt=""
            width={20}
            height={20}
          />
          <span className="text-[16px] text-[#060317] font-medium">2.3k</span>
        </div>

        <div className="flex items-center gap-1">
          <Image
            src="/image/pinterest.svg"
            alt=""
            width={20}
            height={20}
          />
          <span className="text-[16px] text-[#060317] font-medium">2.3k</span>
        </div>

        <span className="text-[#808B96] text-[13px] font-normal">+40</span>
      </div>
    </div>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span className="rounded-[4px] bg-[#F1F1F1] px-[9.84px] py-[3px] text-[14px] text-[#060317] font-normal">
      {text}
    </span>
  );
}