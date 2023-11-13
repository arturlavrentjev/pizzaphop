import {useState, useRef, useEffect} from 'react';

export const useOnClickOutside = (isInitialValue: boolean) => {
  const [isOpen, setIsOpen] = useState(isInitialValue)
  const ref = useRef(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref?.current?.contains(event.target)) {
      setIsOpen(false)
    }
  }
  useEffect(() => {
    window.addEventListener('click', handleClickOutside, true)

    return () => {
      window.removeEventListener('click', handleClickOutside, true)
    }
  })

  return { isOpen, ref, setIsOpen }
}