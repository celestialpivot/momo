/**
利用随机概率实现多账户


=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=29875517&pid=6f0080f787b9a917c991bba747faaeff&tid=89e34d8258d5155fb442e4f3d0f138f1",
    "https://www.maimemo.com/share/page?uid=29875517&pid=0299371d0e981cff986b69646fda1e1b&tid=8496b6a2b1370f2840a914fd744a1957"
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
