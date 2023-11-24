/**
利用随机概率实现多账户


=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=29875517&pid=cf2908aca3f8357f701384ad1678328f&tid=8ec9d552835bff2208cb0fa2accd58e5",
    "https://www.maimemo.com/share/page?uid=32146536&pid=cf2908aca3f8357f701384ad1678328f&tid=c0cec0e92685a60f1d04cf2c5f814008",
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
