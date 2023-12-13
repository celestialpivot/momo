/**
利用随机概率实现多账户


=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=29875517&pid=6b54a142186dc75c046d87bbb612c5d8&tid=ac6167a8dd2fda105ca8dc05ea9e2ca2",
    "https://www.maimemo.com/share/page?uid=32146536&pid=6b54a142186dc75c046d87bbb612c5d8&tid=98325c18ddaa11d811cb235c4e416084"
    
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
