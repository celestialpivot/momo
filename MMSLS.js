/**
利用随机概率实现多账户


=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=29875517&pid=9f790befa99b163a5a7734eaedde30b8&tid=41eceadb3d8ad046d85b905552d20c2a",
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
