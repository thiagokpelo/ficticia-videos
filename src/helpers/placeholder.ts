/** @function
 * @name placeholder
 * @param placeholderColor
 * @param opacity
 */
export function placeholder(placeholderColor: string, opacity: number = 0.7): string {
  return `
    ::-webkit-input-placeholder { /* WebKit browsers */
      color: ${placeholderColor};
      opacity: ${opacity};
    }
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      color: ${placeholderColor};
      opacity: ${opacity};
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
      color: ${placeholderColor};
      opacity: ${opacity};
    }
  `
}
