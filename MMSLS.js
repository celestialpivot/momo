/**
利用随机概率实现多账户


=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=32146536&pid=51406dd9e063b581acceb3363d60e3c3&tid=c1bfe27972d9034419b04049febdd07b3",
    "https://www.maimemo.com/share/page?uid=29875517&pid=ca61e29648691a4736dab4b5837e55a4&tid=a97bdc629474f9dd3dac9be6c241a0a8",
	"https://www.maimemo.com/share/page?uid=2292904&pid=ca61e29648691a4736dab4b5837e55a4&tid=2e8b075ef39c9c8e714090c0cd222c15"
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
