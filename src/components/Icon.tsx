import React, {SVGAttributes} from 'react';
import cs from 'classnames';

require('../icons/money.svg');  // svgo-loader => svg-sprite-loader这个loader会把我们引入的svg标签在body里作为一个symbol，合并成一个大的svg
require('../icons/tag.svg');
require('../icons/chart.svg');
require('../icons/left.svg');
require('../icons/right.svg');

// 难到我们每次添加一个svg都要require一下吗，那这样也太不优雅了，于是⬇我们可以直接引入一个目录
// let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
// try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
  name?: string
} & SVGAttributes<SVGElement>

const Icon = (props: Props) => {
  const {name, children, className, ...rest} = props
  return (
// 可以在控制台打出，看得到id
    <svg className={cs("icon",className)} {...rest}>
      {props.name && <use xlinkHref={'#' + props.name}/>}
    </svg>
  )
};
export default Icon;