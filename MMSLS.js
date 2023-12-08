/**
利用随机概率实现多账户


=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=29875517&pid=6ce0c9ca99bf67fc61870161afc84422&tid=c56ab2ed803cd3be087ad2c972b1e024",
    "https://www.maimemo.com/share/page?uid=32146536&pid=6064bfd2709dbf8711ae7d56a1e59ff2&tid=71dce0a7af6101b57f9f3a70580363cd",
    "https://www.maimemo.com/share/page?uid=29875517&pid=6064bfd2709dbf8711ae7d56a1e59ff2&tid=050b1dfa80e915923da5e5321abc7b79"
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
