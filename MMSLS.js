/**
利用随机概率实现多账户


=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=29875517&pid=9f790befa99b163a5a7734eaedde30b8&tid=41eceadb3d8ad046d85b905552d20c2a",
    "https://www.maimemo.com/share/page?uid=29875517&pid=04409beafb458214a07bb655f006cc13&tid=d06e3d3d4f29e3eaa0a0335ced88e6d3"
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
