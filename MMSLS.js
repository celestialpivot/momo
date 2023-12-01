/**
利用随机概率实现多账户


=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=32146536&pid=fe5003e1b151e64387b8875c72fab5d2&tid=adb948eff0272693a060573dc390f8f5",
    "https://www.maimemo.com/share/page?uid=29875517&pid=fe5003e1b151e64387b8875c72fab5d2&tid=2963ede44f60ff31581493713916c5f9",
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
