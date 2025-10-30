"use client"

import { useState, useEffect, useCallback, useRef } from "react"

export const useInViewAnimation = (ref, threshold = 0.1) => {
  const [inView, setInView] = useState(false)
  const observerRef = useRef(null)

  const observerCallback = useCallback(
    ([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        if (observerRef.current && ref.current) {
          observerRef.current.unobserve(ref.current)
        }
      }
    },
    [ref],
  )

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (observerRef.current) observerRef.current.disconnect()

    const newObserver = new IntersectionObserver(observerCallback, { threshold })
    observerRef.current = newObserver

    newObserver.observe(element)

    return () => {
      if (newObserver) newObserver.disconnect()
    }
  }, [ref, threshold, observerCallback])

  return inView
}
