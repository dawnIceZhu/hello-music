// 进行对DOM操作的文件

/**
 * 给dom元素添加类名
 * @param el dom
 * @param className 类名
 */
export function addClass(el, className) {
  // 判断这个dom对象有这个class的时候什么都不做
  if (hasClass(el, className)) {
    return
  }
  // 获取class
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

/**
 * 判断dom是否有这个类名
 * @param el dom对象
 * @param className 类名
 * @returns {boolean}
 */
export function hasClass(el, className) {
  // 创建正则
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}
