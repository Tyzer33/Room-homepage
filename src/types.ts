export type Slide = {
  title: string
  description: string
  media: {
    mobile: string
    desktop: string
  }
}

export type CarouselContextType = {
  prevSlide: () => void
  nextSlide: () => void
  currentSlide: Slide
}
