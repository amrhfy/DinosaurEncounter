import { motion } from 'framer-motion'

interface ComingSoonImageProps {
  isCompact?: boolean
}

export default function ComingSoonImage({ isCompact }: ComingSoonImageProps) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black/40 to-black/20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <div className={`${isCompact ? 'w-6 h-6' : 'w-16 h-16'} rounded-full bg-white/5 flex items-center justify-center ${isCompact ? 'm-0' : 'mb-4'} mx-auto`}>
          <svg
            className={`${isCompact ? 'w-3 h-3' : 'w-8 h-8'} text-white/20`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        {!isCompact && <p className="text-white/50 text-sm">Image Coming Soon</p>}
      </motion.div>
    </div>
  )
} 

