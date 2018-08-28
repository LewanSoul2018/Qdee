/*
 qdee package
*/
 //% weight=10 icon="\uf013" color=#2896ff
namespace qdee {

    export enum extPins {
        //% block="PA2"
        pa2 = 0x02,
        //% block="PA3"
        pa3 = 0x03,
        //% block="PA6"
        pa6 = 0x06,
        //% block="PA7"
        pa7 = 0x07,
        //% block="PB0"
        pb0 = 0x10,
        //% block="PB1"
        pb1 = 0x11,
        //% block="PB10"        
        pb10 = 0x1a,
        //% block="PB11"
        pb11 = 0x11,       
        //% block="PC13"
        pc13 = 0x23
    }

    export enum extAddress {
        //% block="address 1"
        adress_1 = 0xFE,
        //% block="address 2"
        adress_2 = 0xFD,        
        //% block="address 3"
        adress_3 = 0xFC,
        //% block="address 4"
        adress_4 = 0xFB,            
        //% block="address 5"
        adress_5 = 0xFA,
        //% block="address 6"
        adress_6 = 0xF9,        
        //% block="address 7"
        adress_7 = 0xF8,
        //% block="address 8"
        adress_8 = 0xF7,   
        //% block="address 9"
        adress_9 = 0xF6,
        //% block="address 10"
        adress_10 = 0xF5     
    }
    
    export enum QdeePinIOStatus {
        //% block="Low"
        Low = 0x00,
        //% block="High"
        Hight = 0x01
    }

    export enum IRKEY {
        //% block="CH-"
        CH_MINUS=162,
        //% block="CH"
        CH=98,
        //% block="CH+"
        CH_ADD=226,
        //% block="PREV"
        PREV=34,
        //% block="NEXT"
        NEXT=2,
        //% block="PLAY/PAUSE"
        PLAY_PAUSE=194,
        //% block="+"
        ADD=168,
        //% block="-"
        MINUS=224,
        //% block="EQ"
        EQ=144,
        //% block="100+"
        _100=152,
        //% block="200+"
        _200=176,
        //% block="R0"
        R0=104,
        //% block="R1"
        R1=48,
        //% block="R2"
        R2=24,
        //% block="R3"
        R3=122,
        //% block="R4"
        R4=16,
        //% block="R5"
        R5=56,
        //% block="R6"
        R6=90,
        //% block="R7"
        R7=66,
        //% block="R8"     
        R8=74,
        //% block="R9"
        R9=82
    }

    export enum QdeeCmdType {
        //% block="Invalid command"
        NO_COMMAND = 0,
        //% block="car run"
        CAR_RUN = 1,
        //% block="Servo"
        SERVO = 2,
        //% block="Ultrasonic distance"
        ULTRASONIC = 3,
        //% block="Temperature"
        TEMPERATURE = 4,
        //% block="Sound"
        SOUND = 5,
        //% block="Light"
        LIGHT = 6,
        //% block="Voltage"
        BAT = 7,
        //% block="Rgb light"
        RGB_LIGHT = 8,
        //% block="Honk horn"
        DIDI = 9,
        //% block="Read firmware version"
        VERSION = 10
    }

    export enum QdeeCarRunCmdType {
        //% block="Stop"
        STOP = 0,
        //% block="Go ahead"
        GO_AHEAD,
        //% block="Back"
        GO_BACK,
        //% block="Turn left"
        TURN_LEFT,
        //% block="Turn right"
        TURN_RIGHT,
        //% block="Go ahead slowly"
        GO_AHEAD_SLOW,
        //% block="Turn left slowly"
        TURN_LEFT_SLOW,
        //% block="Turn right slowly"
        TURN_RIGHT_SLOW,
        //% block="Invalid command"
        COMMAND_ERRO
    }

  /**
   * Qdee initialization, please execute at boot time
  */
    //% weight=100 blockId=qdee_Init block="Initialize Qdee"
    export function qdee_Init() {
        qdee_initRGBLight();
        serial.redirect(
            SerialPin.P12,
            SerialPin.P8,
            BaudRate.BaudRate115200);
         
        basic.forever(() => {
            getHandleCmd();
        });
        basic.pause(2000);
        initExtPins();
    }

    function initExtPins()
    {
        let buf = pins.createBuffer(6);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x04;
        buf[3] = 0x3E;//cmd type
        buf[4] = 0x01;
        buf[5] = 0x00;
        serial.writeBuffer(buf);
    }

    let handleCmd: string = "";
    let currentVoltage: number = 0;
    let volume: number = 0;
    let lhRGBLight: QdeeRGBLight.LHQdeeRGBLight;

    let PA2 = 2;
    let PA3 = 2;
    let PA6 = 2;
    let PA7 = 2;
    let PB0 = 2;
    let PB1 = 2;
    let PB10 = 2;
    let PB11 = 2;
    let PC13 = 2;

    let MESSAGE_HEAD = 255;
    /**
    * Get the handle command.
    */
    function getHandleCmd() {
        let charStr: string = serial.readString();
        handleCmd = handleCmd.concat(charStr);
        let cnt: number = countChar(handleCmd, "$");
        if (cnt == 0)
            return;
        let index = findIndexof(handleCmd, "$", 0);
        if (index != -1) {
            let cmd: string = handleCmd.substr(0, index);
            if (cmd.charAt(0).compare("A") == 0 && cmd.length == 13)
            {
                let arg1Int: number = strToNumber(cmd.substr(1, 2));
                let arg2Int: number = strToNumber(cmd.substr(3, 2));
                let arg3Int: number = strToNumber(cmd.substr(5, 2));
                let arg4Int: number = strToNumber(cmd.substr(7, 2));
                let arg5Int: number = strToNumber(cmd.substr(9, 2));
                let arg6Int: number = strToNumber(cmd.substr(11, 2));

                PA6 = checkADPortValue(arg1Int);
                PA7 = checkADPortValue(arg2Int);
                PA3 = checkADPortValue(arg3Int);
                PA2 = checkADPortValue(arg4Int);
                PB0 = checkADPortValue(arg5Int);
                PB1 = checkADPortValue(arg6Int);

            }  
            if (cmd.charAt(0).compare("B") == 0 && cmd.length == 12)
            {
                let arg1Int: number = strToNumber(cmd.substr(1, 2));
                let arg2Int: number = strToNumber(cmd.substr(3, 2));
                let arg3Int: number = strToNumber(cmd.substr(5, 4));
                let arg4Int: number = strToNumber(cmd.charAt(9));
                let arg5Int: number = strToNumber(cmd.charAt(10));
                let arg6Int: number = strToNumber(cmd.charAt(11));
                if (arg1Int != -1)
                {
                    currentVoltage = arg1Int*10353/200;
                }    
                if (arg2Int != -1)
                {
                    volume = arg2Int;
                }   
                if (arg3Int != -1)
                {   
                    let high = (arg3Int >> 8) & 0xff;
                    let low = arg3Int & 0xff;
                    if (high > extAddress.adress_10 && high < extAddress.adress_1)
                    {
                        control.raiseEvent(high,low);    
                    }
                    else if (high == 0xff)
                    {
                        control.raiseEvent(MESSAGE_HEAD,low);    
                    }
                    
                }  
                if (arg4Int != -1)
                {
                    PC13 = arg4Int;
                }
                if (arg5Int != -1)
                {
                    PB11 = arg5Int;
                }
                if (arg6Int != -1)
                {
                    PB10 = arg6Int;    
                }
            }  
        }
        handleCmd = "";
    }

    function checkADPortValue(value: number): number {
        if (value == -1)
            return 2;
        if (value <= 0x2E)
            return 0;
        else if (value >= 0xAA)
            return 1;
        else
            return 2;//未识别电平状态
    }

     function findIndexof(src: string,strFind: string,startIndex: number): number
     {
         for (let i = startIndex; i < src.length; i++)
         {
             if (src.charAt(i).compare(strFind) == 0)
             {
                 return i;
             }    
         }  
         return -1;
     }
 
     function countChar(src: string, strFind: string): number {
         let cnt: number = 0;
         for (let i = 0; i < src.length; i++)
         {
             if (src.charAt(i).compare(strFind) == 0)
             {
                 cnt++;
             }
         }
         return cnt;
    }
    
    function strToNumber(str: string): number {
        let num: number = 0;
        for (let i = 0; i < str.length; i++)
        {
            let tmp: number = converOneChar(str.charAt(i));
            if (tmp == -1)
                return -1;    
            if (i > 0)
                num *= 16;    
            num += tmp;
        }    
        return num;
    }

    function decStrToNumber(str: string): number {
        let num: number = 0;
        for (let i = 0; i < str.length; i++)
        {
            let tmp: number = converOneChar(str.charAt(i));
            if (tmp == -1)
                return -1;    
            if (i > 0)
                num *= 10;    
            num += tmp;
        }    
        return num;
    }

    function converOneChar(str: string): number {
        if (str.compare("0") >= 0 && str.compare("9") <= 0) {
            return parseInt(str);
        }
        else if (str.compare("A") >= 0 && str.compare("F") <= 0) {
            if (str.compare("A") == 0) {
                return 10;
            }
            else if (str.compare("B") == 0) {
                return 11;
            }
            else if (str.compare("C") == 0) {
                return 12;
            }
            else if (str.compare("D") == 0) {
                return 13;
            }
            else if (str.compare("E") == 0) {
                return 14;
            }
            else if (str.compare("F") == 0) {
                return 15;
            }
            return -1;  
        }
        else
            return -1; 
    }


/**
* Set the angle of bus servo 1 to 8, range of 0~240 degree
*/
//% weight=99 blockId=qdee_setBusServo block="Set bus servo|index %index|angle(0~240) %angle|duration %duration"
//% angle.min=0 angle.max=240
export function qdee_setBusServo(index: number, angle: number, duration: number) {
    if (angle > 240 || angle < 0)
    {
        return; 
    }    
    let position = mapRGB(angle, 0, 240, 0, 1000);
   
   let buf = pins.createBuffer(10);
   buf[0] = 0x55;
   buf[1] = 0x55;
   buf[2] = 0x08;
   buf[3] = 0x035;//cmd type
   buf[4] = 0x01;
   buf[5] = duration & 0xff;
   buf[6] = (duration >> 8) & 0xff;
   buf[7] = index;
   buf[8] = position & 0xff;
   buf[9] = (position >> 8) & 0xff;
   serial.writeBuffer(buf);
}

/**
*	Set the speed of the number 1 motor and number 2 motor, range of -100~100, that can control the tank to go advance or turn of.
*/
//% weight=98 blockId=qdee_setMotorSpeed block="Set motor1 speed(-100~100)|%speed1|and motor2|speed %speed2"
//% speed1.min=-100 speed1.max=100
//% speed2.min=-100 speed2.max=100
    export function qdee_setMotorSpeed(speed1: number, speed2: number) {
        if (speed1 > 100 || speed1 < -100 || speed2 > 100 || speed2 < -100) {
            return;
        }
        speed1 = speed1 * -1;
        speed2 = speed2 * -1;
   let buf = pins.createBuffer(6);
   buf[0] = 0x55;
   buf[1] = 0x55;
   buf[2] = 0x04;
   buf[3] = 0x32;//cmd type
   buf[4] = speed1;
   buf[5] = speed2;
   serial.writeBuffer(buf);
}
    
    /**
     * Do something when a button is pushed down and released again.
     * @param address the message id
     * @param code the button that needs to be pressed
     * @param body code to run when event is raised
     */
    //% weight=96 blockId=onQdee_custom_ir_pressed block="on ir button|%address|code %code|pressed"
    export function onQdee_custom_ir_pressed(address: extAddress,code: number , body: Action) {
        control.onEvent(address,code,body);
    }

    /**
     * Do something when a button is pushed down and released again.
     * @param code the ir key button that needs to be pressed
     * @param body code to run when event is raised
     */
    //% weight=94 blockId=onQdee_remote_ir_pressed block="on remote-control|%code|pressed"
    export function onQdee_remote_ir_pressed(code: IRKEY,body: Action) {
        control.onEvent(MESSAGE_HEAD,code,body);
    }
    
/**
* Get the volume level detected by the sound sensor, range 0 to 255
*/
//% weight=92 blockId=qdee_getSoundVolume block="Sound volume"
	export function qdee_getSoundVolume(): number {	
  	    return volume;
    }	

/**
 *  Get Qdee current voltage,the unit is mV
*/
    //% weight=90 blockId=qdee_getBatVoltage block="Get QbQdeeit current voltage (mV)"
    export function qdee_getBatVoltage(): number {
        return currentVoltage;
    }

/**
 * Set extension pins output high/low
 */
 //% weight=88 blockId=qdee_ext_output block="Set extension |pin %pin|%out"   
    export function qdee_ext_output(pin: extPins, out: QdeePinIOStatus)
    {
        let buf = pins.createBuffer(7);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x05;
        buf[3] = 0x3E;//cmd type
        buf[4] = 0x2;
        buf[5] = pin;
        buf[6] = out;
        serial.writeBuffer(buf);
    }

/**
 * Get extension pin io status
 */
    //% weight=86 blockId=qdee_ext_io_status block="Get Qdee extension pin %pin"
    export function qdee_ext_io_status(pin: extPins): number {
        let return_value = 2;
        switch (pin)
        {
            case extPins.pa2: return_value = PA2; break;
            case extPins.pa3: return_value = PA3; break;
            case extPins.pa6: return_value = PA6; break;
            case extPins.pa7: return_value = PA7; break;
            case extPins.pb0: return_value = PB0; break;
            case extPins.pb1: return_value = PB1; break;
            case extPins.pb10: return_value = PB10; break;
            case extPins.pb11: return_value = PB11; break;
            case extPins.pc13: return_value = PC13; break;
        }
        return return_value;
    }
/**
* Set ir enter learn mode
*/
  //% weight=84 blockId=qdee_ir_learn_mode block="Set ir enter learn mode,code number %num"   
//% num.min=1 num.max=10    
  export function qdee_ir_learn_mode(num: number)
  {
      if (num < 1 || num > 10)
          return;
      let buf = pins.createBuffer(6);
      buf[0] = 0x55;
      buf[1] = 0x55;
      buf[2] = 0x04;
      buf[3] = 0x3E;//cmd type
      buf[4] = 0x03;
      buf[5] = num - 1;
      serial.writeBuffer(buf);
  }
 
/**
* Let Qdee send ir custom data
*/
  //% weight=82 blockId=qdee_send_ir_data block="Let Qdee send custom ir |data %num|address %address"
  //% num.min=0 num.max=254  
  export function qdee_send_ir_data(address: extAddress,num: number)
  {
      if (num < 0 || num > 254)
          return;
      let buf = pins.createBuffer(8);
      buf[0] = 0x55;
      buf[1] = 0x55;
      buf[2] = 0x06;
      buf[3] = 0x3E;//cmd type
      buf[4] = 0x04;
      buf[5] = num;
      buf[6] = address;
      buf[7] = 0;
      serial.writeBuffer(buf);
    }
    
/**
* Let Qdee send ir learn data
*/
  //% weight=80 blockId=qdee_send_learn_data block="Let Qdee send ir learn|number %num|"
  //% num.min=1 num.max=10  
  export function qdee_send_learn_data(num: number)
  {
    if (num < 1 || num > 10)
        return;
      let buf = pins.createBuffer(8);
      buf[0] = 0x55;
      buf[1] = 0x55;
      buf[2] = 0x06;
      buf[3] = 0x3E;//cmd type
      buf[4] = 0x04;
      buf[5] = 0xFF;
      buf[6] = 0xFF;
      buf[7] = num-1;
      serial.writeBuffer(buf);
    }
    
/**
* Let Qdee send ir remote-control data
*/
  //% weight=78 blockId=qdee_send_remote_data block="Let Qdee send ir remote-control|key %irKey|"
  export function qdee_send_remote_data(irKey: IRKEY)
  {
      let buf = pins.createBuffer(8);
      buf[0] = 0x55;
      buf[1] = 0x55;
      buf[2] = 0x06;
      buf[3] = 0x3E;//cmd type
      buf[4] = 0x04;
      buf[5] = irKey;
      buf[6] = 0xFF;
      buf[7] = 0;
      serial.writeBuffer(buf);
  }

    /**
	 * Initialize RGB
	 */
	function qdee_initRGBLight() {
		if (!lhRGBLight) {
			lhRGBLight = QdeeRGBLight.create(DigitalPin.P15, 4, QdeeRGBPixelMode.RGB);
        }
        qdee_clearLight();
    }

    /**
         * Set the brightness of the strip. This flag only applies to future operation.
         * @param brightness a measure of LED brightness in 0-255. eg: 255
    */
    //% blockId="qdee_setBrightness" block="set brightness %brightness"
    //% weight=76
    export function qdee_setBrightness(brightness: number): void {
        lhRGBLight.setBrightness(brightness);
    }
    
    /**
     * Set the color of the colored lights, after finished the setting please perform  the display of colored lights.
     */
    //% weight=74 blockId=qdee_setPixelRGB block="Set|%lightoffset|color to %rgb"
    export function qdee_setPixelRGB(lightoffset: QdeeLights, rgb: QdeeRGBColors)
    { 
        lhRGBLight.setPixelColor(lightoffset, rgb);
     }
    

    /**
     * Set RGB Color argument
     */
    //% weight=72 blockId=qdee_setPixelRGBArgs block="Set|%lightoffset|color to %rgb"
    export function qdee_setPixelRGBArgs(lightoffset: QdeeLights, rgb: number)
    {
        lhRGBLight.setPixelColor(lightoffset, rgb);
    }


    /**
     * Display the colored lights, and set the color of the colored lights to match the use. After setting the color of the colored lights, the color of the lights must be displayed.
     */
    //% weight=70 blockId=qdee_showLight block="Show light"
    export function qdee_showLight() {
        lhRGBLight.show();
    }

    /**
     * Clear the color of the colored lights and turn off the lights.
     */
    //% weight=70 blockGap=50 blockId=qdee_clearLight block="Clear light"
    export function qdee_clearLight() {
        lhRGBLight.clear();
    }


	function mapRGB(x: number, in_min: number, in_max: number, out_min: number, out_max: number): number {
		return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
    
     /**
     * Resolve the Bluetooth that phone APP send command type, the total of nine types of commands: tank display command, servo debug command, obtaining the distance of ultrasonic command, obtaining temperature command, obtain sound size rank orders, to obtain the light level command, set the color lights command, honking command, firmware version information command.
     */
    //% weight=68 blockId=qdee_analyzeBluetoothCmd block="Get bluetooth command type %str"
    export function qdee_analyzeBluetoothCmd(str: string): number {
        if (str.length > 9)
        {
            let cmdHead = str.substr(0, 3);
            
            if (cmdHead == "CMD")
            {
                let cmdTypeStr: string = str.substr(4, 2);
                if (!checkArgsInt(cmdTypeStr))
                {
                    return QdeeCmdType.NO_COMMAND;
                }    
                let cmdType = parseInt(cmdTypeStr);

                if (cmdType > QdeeCmdType.VERSION || cmdType < 0)
                {
                    return QdeeCmdType.NO_COMMAND; 
                } 
                else
                {
                    return cmdType;
                }    
            }
            else
            {
                return QdeeCmdType.NO_COMMAND; 
            }    
        }   
        else
        {
            return QdeeCmdType.NO_COMMAND;
        }    
    }

    function checkArgsInt(str: string): boolean {
        let i = 0;
        for (; i < str.length; i++)
        {
            if (str.charAt(i) < '0' || str.charAt(i) > '9')
            {
                return false;
            }    
        }
        return true;
    }

    /**
     * Resolve the parameters that the phone APP send the command,there are 3 parameters of servo debug command,the other command has just one parameter.
     */
    //% weight=66  blockId=qdee_getArgs block="Get bluetooth command|%str|argument at %index"
    //% index.min=1 index.max=3
    export function qdee_getArgs(str: string, index: number): number {
        let cmdType = qdee_analyzeBluetoothCmd(str);
        if (cmdType == QdeeCmdType.NO_COMMAND)
        {
            return QdeeCarRunCmdType.COMMAND_ERRO;
        }
        else {
            let dataIndex = 7;
            let subLegth = 2;
            if (index == 2)
            {
                dataIndex = 10;
                subLegth = 4;
            }
            else if (index == 3)
            {
                dataIndex = 15;
                subLegth = 4;
            } 
            if (cmdType == QdeeCmdType.SERVO)
            {
                if (str.length < 19)
                {
                    return QdeeCmdType.NO_COMMAND;
                }    
            }
            if ((index == 1 && str.length < 10)||(index == 2 && str.length < 15)||(index == 3 && str.length < 19))
            {
                return 0;
            }    
            let strArgs = str.substr(dataIndex, subLegth);
            if (!checkArgsInt(strArgs))
            {
                return 0;
            }    
            let arg = parseInt(strArgs);
            return arg;
        }
    }

    /**
     * Returns the enumeration of the command type, which can be compared with this module after obtaining the bluetooth command type sent by the mobile phone APP.
     */
    //% weight=64 blockId=qdee_getBluetoothCmdtype block="Bluetooth command type %type"
    export function qdee_getBluetoothCmdtype(type: QdeeCmdType): number {
        return type;
    }

    /**
     * The command type of the tank is stop, go ahead, back, turn left, turn right, slow down, turn left slowly, turn right slowly.
     */
    //% weight=62 blockId=qdee_getRunCarType block="Car run type %type"
    export function qdee_getRunCarType(type: QdeeCarRunCmdType): number {
        return type;
    }

    /**
     * The conversion temperature value to standard command, sent to the mobile phone, and the APP displays the current temperature.
     */
    //% weight=60 blockId=qdee_convertTemperature block="Convert temperature %data"
    export function qdee_convertTemperature(data: number): string {
        let cmdStr: string = "CMD|04|";
        cmdStr += data.toString();
        cmdStr += "|$";
        return cmdStr;
    }

    /**
     * Convert the light value to the standard command and send it to the mobile phone. The APP displays the current light level (0~255).
     */
    //% weight=58 blockId=qdee_convertLight block="Convert light %data"
    export function qdee_convertLight(data: number): string {
        let cmdStr: string = "CMD|06|";
        cmdStr += data.toString();
        cmdStr += "|$";
        return cmdStr;
    }
    
    /**
     * Convert the battery value to the standard command and send it to the mobile phone. The APP displays the current voltage.
     */
    //% weight=56 blockId=qdee_convertBattery block="Convert battery %data"
    export function qdee_convertBattery(data: number): string {
        let cmdStr: string = "CMD|07|";
        cmdStr += data.toString();
        cmdStr += "|$";
        return cmdStr;
    }
}
