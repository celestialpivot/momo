/**
利用随机概率实现多账户


=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=32146536&pid=0ba932606f21b7be08344f0891c0f8c5&tid=5a9538863be0ea5fbda7cc80a82ef021",
    "https://www.maimemo.com/share/page?uid=29875517&pid=0ba932606f21b7be08344f0891c0f8c5&tid=9ea3e41051809c6dee60b64e26ec7dbb",
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
