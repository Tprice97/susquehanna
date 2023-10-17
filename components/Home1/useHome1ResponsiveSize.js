/**********************************************************************
 *
 *   Responsiveness hook generated by Quest
 *
 *   Responsive Logic for the component goes in this hook
 *   If you want to customize the min/max values for the breakpoints, open the component on Quest Editor.
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';

const useHome1ResponsiveSize = () => {
  const [variant, setVariant] = React.useState('Property11440');

  React.useEffect(() => {
    const handlerProperty11440 = (e) =>
      setVariant((size) => (e.matches ? 'Property11440' : size));

    const Property11440Size = window.matchMedia('(max-width: 1584px)');
    setVariant((size) => (Property11440Size.matches ? 'Property11440' : size));
    Property11440Size.addEventListener('change', handlerProperty11440);

    const handlerProperty11728 = (e) =>
      setVariant((size) => (e.matches ? 'Property11728' : size));

    const Property11728Size = window.matchMedia(
      '(min-width: 1585px) and (max-width: 1824px)'
    );
    setVariant((size) => (Property11728Size.matches ? 'Property11728' : size));
    Property11728Size.addEventListener('change', handlerProperty11728);

    const handlerProperty11920 = (e) =>
      setVariant((size) => (e.matches ? 'Property11920' : size));

    const Property11920Size = window.matchMedia('(min-width: 1825px)');
    setVariant((size) => (Property11920Size.matches ? 'Property11920' : size));
    Property11920Size.addEventListener('change', handlerProperty11920);
  }, []);

  return variant;
};

export default useHome1ResponsiveSize;