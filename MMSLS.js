/**
利用随机概率实现多账户


=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=29875517&pid=662f5e00a288c231a644e71024835ef0&tid=f9fbb00e546030d88d3c27991784695f",
    "https://www.maimemo.com/share/page?uid=29875517&pid=fd7d3e7267b739fe7845d45676917685&tid=c33a5faafe8f248df9d70a2b58bf3c75"
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
