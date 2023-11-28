/**
利用随机概率实现多账户


=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=29875517&pid=19841328f10ef1667812ccff052f6f9e&tid=a8b0eac28a19221bf450053f6f3a4827",
    "https://www.maimemo.com/share/page?uid=29875517&pid=4ae1160f59431ccc747c36b6479beeb4&tid=ce2edae62be7ebc64ab67edc482bfa8a",
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
