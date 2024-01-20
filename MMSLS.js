/**
利用随机概率实现多账户


=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=29875517&pid=60042dfc5107bb07fdaf44cc57d24b33&tid=b895eecbd5466feb7678f71c217f4c50",
    "https://www.maimemo.com/share/page?uid=29875517&pid=b826c9310f2645a2c5a670393871a8b3&tid=04e0a3f12a7d34df83ce5ce9087404ab"
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
