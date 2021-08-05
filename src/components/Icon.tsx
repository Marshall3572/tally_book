import React from 'react';

require('../icons/money.svg');  // svgo-loader => svg-sprite-loader这个loader会把我们引入的svg标签在body里作为一个symbol，合并成一个大的svg
require('../icons/tag.svg');
require('../icons/chart.svg');

// 难到我们每次添加一个svg都要require一下吗，那这样也太不优雅了，于是⬇我们可以直接引入一个目录
// let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
// try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
  name: string
}

const Icon = (props: Props) => {
  return (
// 可以在控制台打出，看得到id
    <svg className="icon">
      <use xlinkHref={'#' + props.name}/>
    </svg>
  )
};
export default Icon;