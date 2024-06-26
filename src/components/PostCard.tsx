import Link from "next/link";
import Image from "next/image";

const PostCard = ({ post }: any) => {
  const { title, slug, excerpt, image, date, type } = post.fields;

  function formatDate(inputDate: any) {
    const date = new Date(inputDate);

    // Define custom month names
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Extract day, month, and year separately
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    // Add 'th' to day
    const formattedDay = `${day}${getDaySuffix(day)}`;

    // Get the month name from the custom list
    const monthName = monthNames[monthIndex];

    return `${formattedDay} ${monthName} ${year}`;
  }

  // Helper function to get day suffix (e.g., "th", "st", "nd", "rd")
  function getDaySuffix(day: any) {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  return (
    <div className="w-full sm:w-[32%] shadow rounded bg-white">
      <Link href={`/blog/${slug}`} aria-label={title} className="block">
        <div className="relative overflow-hidden h-48 md:h-64 w-full">
          <img
            className="rounded-t-sm border-b md:h-64 md:w-full object-cover h-56 w-full cursor-pointer transition hover:opacity-60 ease-in-out duration-500"
            src={`https:${image?.fields?.file?.url}`}
            alt={`Cover Image for ${title}`}
            // layout="fill"
            // objectFit="cover"
          />
        </div>
        <div className="px-4 pt-2 md:pt-3 pb-4 md:pb-6">
          <p className="md:mt-2 text-xs text-blue-400">{type}</p>

          <h1 className="font-display line-clamp tracking-tight mt-1 text-lg font-semibold leading-none text-gray-800 ">
            {title}
          </h1>
          <p className="text-[13px] text-gray-500 font-uncut mt-2">
            {formatDate(date)}
          </p>
          <p className="text-[13px] sm:text-sm text-gray-700 font-uncut line-clamp mt-1">
            {excerpt}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
