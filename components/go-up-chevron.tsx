import { ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

export default function GoUpChevron({ scrolled }: { scrolled: boolean }) {
  return (
    <>
      {scrolled && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed right-10 bottom-10 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary"
          >
            <a href="#home">
              <ChevronUp />
            </a>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  )
}
