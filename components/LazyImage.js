import { useState, useEffect } from 'react'
import styled from '@emotion/styled'

export default function LazyImage({ src, alt, width, height, modal }) {
  console.log('Render LazyImage')

  const [imageSrc, setImageSrc] = useState('/images/common/pokemon_ball.gif')
  const [imageRef, setImageRef] = useState()

  const onLoad = (event) => {
    event.target.classList.add('is-loaded')
  }

  const onError = (event) => {
    event.target.classList.add('has-error')
  }

  useEffect(() => {
    let observer
    let didCancel = false

    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src)
                observer.unobserve(imageRef)
              }
            })
          },
          {
            threshold: 0.01,
            rootMargin: '75%',
          }
        )
        observer.observe(imageRef)
      } else {
        setImageSrc(src)
      }
    }
    return () => {
      didCancel = true
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef)
      }
    }
  }, [src, imageSrc, imageRef])
  return (
    <Image
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      onLoad={onLoad}
      onError={onError}
      modal={modal}
    />
  )
}

const Image = styled.img`
  margin: auto;
  max-width: ${({ modal }) => (modal ? '70%' : '100%')};
  height: auto;
  object-fit: contain;
  transition: all ease-in-out 0.5s;
  transform: scale(0.7);
  &.is-loaded:not(.has-error) {
    animation: loaded 0.5s ease-in-out forwards;
  }
  &.has-error {
    content: url(/images/common/pokemon_ball.gif);
  }
  @keyframes loaded {
    0% {
      opacity: 0.5;
      transform: scale(0.5);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`
