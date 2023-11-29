/**
利用随机概率实现多账户


=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=32146536&pid=ccc24be8120691e092c897bb9fd53f80&tid=2d3fe51a7da95a340e4591c72369e96a",
    "https://www.maimemo.com/share/page?uid=29875517&pid=ccc24be8120691e092c897bb9fd53f80&tid=6a504ece5b59718f2414ef03a6060b55",
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
