import React from 'react';

export default function Headings({ headings, activeId }) {
  return (
    <ul>
      {headings.map((heading) => (
        <li key={heading.id} className={heading.id === activeId ? "active": ""}> 
          <a
            href={`#${heading.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(`#${heading.id}`).scrollIntoView();
            }}
          >
            {heading.title}
          </a>
          {heading.items.length > 0 && (
            <ul>
              {heading.items.map((child) => (
                <li key={child.id}>
                  <a
                    href={`#${child.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${child.id}`).scrollIntoView();
                    }}
                  >
                    {child.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
          
        </li>
      ))}
    </ul>
  );
}
