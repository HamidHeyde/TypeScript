console.log('\n', '---------Factory Absolute---------', '\n');

interface Button {
  text: string;
  width: number;
  height: number;
}

interface AndroidButton extends Button {
  type: 'android';
  shadowEnabled?: boolean;
  roundCorners?: boolean;
}

interface IOSButton extends Button {
  type: 'ios';
  textAlign?: string;
}

class MobileButtonAbsoluteFactory {
  private type: 'android' | 'ios' = 'android'
  private button: AndroidButton | IOSButton = {
    type: this.type,
    text: 'Button',
    width: 100,
    height: 100
  };
  constructor(type: 'android' | 'ios') {
    this.type = type;
    this.createButton();
  }

  private createButton = () => {
    this.button =
      this.type === 'android'
        ? {
            type: 'android',
            text: 'Button',
            width: 100,
            height: 100,
            shadowEnabled: true,
            roundCorners: true
          }
        : {
            type: 'ios',
            text: 'Button',
            width: 100,
            height: 100,
            textAlign: 'center'
          };
  };

  getButton = (): AndroidButton | IOSButton => this.button;
}

const androidButton = new MobileButtonAbsoluteFactory('android');
console.log(androidButton.getButton());

const iosButton = new MobileButtonAbsoluteFactory('ios');
console.log(iosButton.getButton());
