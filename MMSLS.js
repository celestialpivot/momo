/**
利用随机概率实现多账户


=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=29875517&pid=4a4a1aee6dd8bda02779709522be1735&tid=5872c64008af5f18dcc1b2299706bb3c",
    "https://www.maimemo.com/share/page?uid=29875517&pid=e5ee042614821f72d9e96896ed34a11b&tid=30d2c4e59ab584bc667570f7286b689e"
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
