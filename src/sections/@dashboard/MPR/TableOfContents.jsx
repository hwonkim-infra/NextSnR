import React, { useState } from 'react'
import Headings from './Headings';
import useHeadingsData from './useHeadingsData';

export default function TableOfContents() {
    const [activeId, setActiveId] = useState()

    const { nestedHeadings } = useHeadingsData();
    useIntersectionObserver(setactiveId)

  return (
    <nav aria-label='Table of contents'>
        <Headings headings = {nestedHeadings} activeId={activeId} />
    </nav>
  )
}
