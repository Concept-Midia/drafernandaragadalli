import React from 'react';

export const FaceBotanicalLineArt: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none stroke-[#845F46]/35 ${className}`}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Delicate Golden Ratio / Harmony Aura Rings */}
      <circle
        cx="200"
        cy="180"
        r="95"
        strokeDasharray="4 6"
        className="stroke-[#C5A880]/30 animate-pulse-subtle"
        strokeWidth="1"
      />
      <circle
        cx="195"
        cy="175"
        r="135"
        className="stroke-[#845F46]/20"
        strokeWidth="0.8"
      />

      {/* Elegant Female Profile Silhouette */}
      <path
        d="M 170 85 
           C 185 85, 205 95, 215 115 
           C 222 130, 224 145, 222 155
           C 220 162, 228 165, 235 172
           C 240 177, 242 184, 235 188
           C 226 193, 222 195, 225 204
           C 227 210, 231 213, 231 218
           C 231 223, 223 227, 218 230
           C 214 233, 217 241, 222 248
           C 225 253, 222 260, 214 263
           C 200 268, 192 278, 190 295
           C 188 312, 190 340, 192 370"
        className="stroke-[#845F46]/45"
        strokeWidth="1.6"
      />

      {/* Gentle Lip and Chin contour */}
      <path
        d="M 224 205 C 220 206, 215 208, 213 213"
        strokeWidth="1.2"
        className="stroke-[#845F46]/40"
      />
      <path
        d="M 218 228 C 213 231, 208 233, 205 238"
        strokeWidth="1.2"
        className="stroke-[#845F46]/40"
      />

      {/* Delicate Closed Eye & Eyelash Line */}
      <path
        d="M 198 162 C 205 166, 212 166, 217 161"
        strokeWidth="1.4"
        className="stroke-[#845F46]/50"
      />
      <path
        d="M 215 163 L 218 160"
        strokeWidth="1.2"
        className="stroke-[#845F46]/40"
      />

      {/* Graceful Eyebrow */}
      <path
        d="M 193 150 C 203 145, 216 147, 223 154"
        strokeWidth="1.3"
        className="stroke-[#845F46]/45"
      />

      {/* Hair swirl / artistic continuous line */}
      <path
        d="M 170 85 
           C 150 90, 135 115, 138 140 
           C 142 165, 130 185, 122 205
           C 112 230, 115 260, 128 285
           C 140 310, 150 335, 152 365"
        className="stroke-[#845F46]/35"
        strokeWidth="1.4"
      />

      {/* Botanical Stem Blooming from Behind */}
      <path
        d="M 160 420 
           C 165 370, 175 320, 185 270 
           C 192 235, 198 190, 188 150
           C 182 125, 172 105, 160 90"
        className="stroke-[#845F46]/50"
        strokeWidth="1.5"
      />

      {/* Botanical Leaves - Leaf 1 */}
      <path
        d="M 183 285 C 195 275, 215 278, 222 290 C 210 298, 192 295, 183 285 Z"
        className="stroke-[#845F46]/45 fill-[#845F46]/5"
        strokeWidth="1.3"
      />
      {/* Botanical Leaves - Leaf 2 */}
      <path
        d="M 176 330 C 158 322, 145 332, 142 346 C 156 350, 170 342, 176 330 Z"
        className="stroke-[#845F46]/45 fill-[#845F46]/5"
        strokeWidth="1.3"
      />
      {/* Botanical Leaves - Leaf 3 */}
      <path
        d="M 188 230 C 205 220, 225 224, 230 235 C 215 244, 198 240, 188 230 Z"
        className="stroke-[#845F46]/45 fill-[#845F46]/5"
        strokeWidth="1.3"
      />
      {/* Botanical Leaves - Leaf 4 */}
      <path
        d="M 185 180 C 172 170, 160 178, 156 190 C 170 195, 182 188, 185 180 Z"
        className="stroke-[#845F46]/45 fill-[#845F46]/5"
        strokeWidth="1.3"
      />
      {/* Delicate top sprout */}
      <path
        d="M 160 90 C 155 78, 162 68, 170 70 C 172 78, 168 86, 160 90 Z"
        className="stroke-[#845F46]/45 fill-[#845F46]/5"
        strokeWidth="1.2"
      />
    </svg>
  );
};
