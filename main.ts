/*
 qdee package
*/
 //% weight=10 icon="\uf013" color=#2896ff
namespace qdee {

    export enum qdee_Colors {
        //% block="Red"
        Red = 0x01,
        //% block="Green"
        Green = 0x02,
        //% block="Blue"
        Blue = 0x03,
	    //% block="Black"
        Black = 0x04,
        //% block="White"
        White = 0x05
    }

    export enum extPins {
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

    export enum qdee_lineFollower {
        //% blockId="S1_OUT_S2_OUT" block="Sensor1 and sensor2 are out black line"
        S1_OUT_S2_OUT = 0x00,
        //% blockId="S1_OUT_S2_IN" block="Sensor2 in black line but sensor1 not"
        S1_OUT_S2_IN = 0x01,
        //% blockId="S1_IN_S2_OUT" block="Sensor1 in black line but sensor2 not"
        S1_IN_S2_OUT = 0x02,
        //% blockId="S1_IN_S2_IN" block="Sensor1 and sensor2 are in black line "
        S1_IN_S2_IN = 0x03
     }

    export enum colorSensorPort {
        //% block="Port 4"
        port4 = 0x04,       
        //% block="Port 9"
        port9 = 0x09
    }

    export enum fanPort {
        //% block="Port 1"
        port1 = 0x01,
        //% block="Port 2"
        port2 = 0x02,       
    }

    export enum Servos {
        //% block="servo 1"
        Servo1 = 0x01,
        //% block="servo 2"
        Servo2 = 0x02   
    }

    export enum ultrasonicPort {
        //% block="Port 1"
        port1 = 0x01,
        //% block="Port 2"
        port2 = 0x02,    
        //% block="Port 3"
        port3 = 0x03
    }

    export enum busServoPort {
        //% block="Port 10"
        port10 = 0x0A
    }
    export enum extPort {
        //% block="Port 1"
        port1 = 0x01,
        //% block="Port 2"
        port2 = 0x02,       
        //% block="Port 3"
        port3 = 0x03,
        //% block="Port 4"
        port4 = 0x04,       
        //% block="Port 6"
        port6 = 0x06,       
        //% block="Port 8"
        port8 = 0x08,      
        //% block="Port 9"
        port9 = 0x09, 
    }

    export enum knobPort {
        //% block="Port 1"
        port1 = 0x01,
        //% block="Port 6"
        port6 = 0x06,       
        //% block="Port 8"
        port8 = 0x08
    }

    export enum touchKeyPort {
        //% block="Port 1"
        port1 = 0x01,
        //% block="Port 2"
        port2 = 0x02,
        //% block="Port 3"
        port3 = 0x03,        
        //% block="Port 6"
        port6 = 0x06,       
        //% block="Port 8"
        port8 = 0x08
    }

    export enum lineFollowPort {
        //% block="Port 1"
        port1 = 0x01,
        //% block="Port 6"
        port6 = 0x06,       
        //% block="Port 8"
        port8 = 0x08
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

    export enum LineFollowerSensor {
        //% block="Sensor 1"
        LFSensor_1 = 0x00,
        //% block="Sensor 2"
        LFSensor_2 = 0x01        
    }

    export enum SofaStatus {
        //% block="vacation"
        VACATION = 0x00,
        //% block="occupied"
        OCCUPIED = 0x01
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
        VERSION = 10,
        //% block="Remote control"
        REMOTE = 11,
        //% block="Learn code"
        LEARN_CODE = 12,       
        //% block="Read angle"
        READ_ANGLE = 13,
        //% block="Light belt"
        RGB_BELT = 14,
        //% block="Sofa status"
        SOFA = 15,
        //% block="Game data"
        GAME = 16, 
        //% block="WIFI mode"
        WIFI_MODE = 17,
        //% block="Get mac"
        GET_MAC = 18,
        //% block="Change mode"
        CHANGE_MODE = 19,
        //% block="Show face"
        SHOW_FACE = 20,
         //% block="Play tone"
        PLAY_TONE = 21       
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

    export enum AvoidSensor {
        //% block="sensor 1"
        Sensor_1 = 1,
        //% block="sensor 2"
        Sensor_2 = 2
    }

    export enum statusPort {
        //% block="LOW"
        Low = 0x00,
        //% block="HIGH"
        High = 0x01
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
    let lhRGBLightBelt: QdeeRGBLight.LHQdeeRGBLight;

    let PA6 = 2;
    let PA7 = 2;
    let PB0 = 2;
    let PB1 = 2;
    let PB10 = 2;
    let PB11 = 2;
    let PC13 = 2;

    let PA6_ad = 0;
    let PA7_ad = 0;
    let PB0_ad = 0;
    let PB1_ad = 0;

    let iicPortStatus = false;

    let MESSAGE_HEAD = 0xff;
    let MESSAGE_HEAD_LONG: number = 0x100;
    let MESSAGE_HEAD_STOP: number = 0x101;

    let i2cPortValid: boolean = true;
    let connectStatus: boolean = false;

    let servo1Angle: number = 0xfff;
    let servo2Angle: number = 0xfff;

    let macStr: string = "";

    let cntIr = 0;
    let adress = 0;
    let sendFlag = false;
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

                PA6_ad = arg1Int;
                PA7_ad = arg2Int;
                PB0_ad = arg3Int;
                PB1_ad = arg4Int;   

                if (arg5Int != -1)
                {
                    currentVoltage = arg5Int*10353/200;
                }  

                if (arg6Int != -1)
                {
                    volume = arg6Int;
                }   
                
                PA6 = checkADPortValue(arg1Int);
                PA7 = checkADPortValue(arg2Int);
                PB0 = checkADPortValue(arg3Int);
                PB1 = checkADPortValue(arg4Int);

            }  
            if (cmd.charAt(0).compare("B") == 0 && cmd.length == 16)
            {
                let arg1Int: number = strToNumber(cmd.substr(1, 2));
                let arg2Int: number = strToNumber(cmd.substr(3, 2));
                let arg3Int: number = strToNumber(cmd.substr(5, 2));
                let arg4Int: number = strToNumber(cmd.substr(7, 2));
                let arg5Int: number = strToNumber(cmd.substr(9, 4));
                let arg6Int: number = strToNumber(cmd.charAt(9));
                let arg7Int: number = strToNumber(cmd.charAt(10));
                let arg8Int: number = strToNumber(cmd.charAt(11));
  
                PA6_ad = arg1Int;
                PA7_ad = arg2Int;
                PB0_ad = arg3Int;
                PB1_ad = arg4Int;   

                PA6 = checkADPortValue(arg1Int);
                PA7 = checkADPortValue(arg2Int);
                PB0 = checkADPortValue(arg3Int);
                PB1 = checkADPortValue(arg4Int);

                if (arg5Int != -1)
                {   
                    let high = (arg5Int >> 8) & 0xff;
                    let low = arg5Int & 0xff;
                    if (high == 0)
                    {
                        if (adress != 0) {
                            control.raiseEvent(MESSAGE_HEAD_STOP, 0);
                        }    
                        sendFlag = false;
                        adress = 0;
                    }
                    else
                    {
                        if (low >= extAddress.adress_10 && low <= extAddress.adress_1)
                        {
                            control.raiseEvent(low, high);
                        }
                        else if (low == 0xff)
                        {
                            if (adress != high) {
                                if (!sendFlag) {
                                    control.raiseEvent(MESSAGE_HEAD, high);
                                    sendFlag = true;
                                }
                                adress = high
                            }
                            else {
                                cntIr++;
                            }
                            if (cntIr >= 3) {
                                cntIr = 0;
                                control.raiseEvent(MESSAGE_HEAD_LONG, high);
                            }
                        }                                   
                    }
                }
                if (arg6Int != -1) {
                    PC13 = arg6Int;
                }
                if (arg7Int != -1) {
                    PB11 = arg7Int;
                }
                if (arg8Int != -1) {
                    PB10 = arg8Int;
                }  
            }  
            if (cmd.compare("IROK") == 0)
            {
                music.playTone(988, music.beat(BeatFraction.Quarter));
            }
            if (cmd.compare("QdeeTest") == 0)
            {
                basic.pause(10);
                if (GetColorSenserID())
                {
		    basic.pause(100);
                    qdee_send_to_check("QdeeTestOK$");
                    basic.pause(100);
                }
                else
                {
		         if (GetColorSenserID())
                	{
		            basic.pause(100);
                    	    qdee_send_to_check("QdeeTestOK$");
                            basic.pause(100);
                	}
			else
			{
			   basic.pause(100);
                    	   qdee_send_to_check("QdeeTestERR$");
                    	   basic.pause(100);
			}

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
*	Set the speed of the number 1 motor and number 2 motor, range of -100~100, that can control the tank to go advance or turn of.
*/
//% weight=94 blockId=qdee_setMotorSpeed blockGap=50 block="Set motor1 speed(-100~100)|%speed1|and motor2|speed %speed2"
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
     * Do someting when Qdee receive custom ir code
     * @param address the message id
     * @param code the button that needs to be pressed
     * @param body code to run when event is raised
     */
    //% weight=93 blockId=onQdee_custom_ir_pressed block="on ir receive|%address|code %code"
    export function onQdee_custom_ir_pressed(address: extAddress,code: number , body: Action) {
        control.onEvent(address,code,body);
    }

/**
* Let Qdee send ir custom data
*/
  //% weight=92 blockId=qdee_send_ir_data block="Let Qdee send custom ir|%address|code %num"
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
     * Do someting when Qdee receive remote-control code
     * @param code the ir key button that needs to be pressed
     * @param body code to run when event is raised
     */
    //% weight=91 blockId=onQdee_remote_ir_pressed block="on remote-control|%code|pressed"
    export function onQdee_remote_ir_pressed(code: IRKEY,body: Action) {
        control.onEvent(MESSAGE_HEAD,code,body);
    }

        /**
     * Do someting when remote-control longpress
     * @param code the ir key button that needs to be pressed
     * @param body code to run when event is raised
     */
    //% weight=90 blockId=onQdee_remote_ir_longpressed block="on remote-control|%code|long pressed"
    export function onQdee_remote_ir_longpressed(code: IRKEY, body: Action) {
        control.onEvent(MESSAGE_HEAD_LONG, code, body);
    }

        /**
     * Do someting when remote-control stop send
     * @param code the ir key button that needs to be pressed
     * @param body code to run when event is raised
     */
    //% weight=88 blockId=onQdee_remote_no_ir block="on remote-control stop send"
    export function onQdee_remote_no_ir(body: Action) {
        control.onEvent(MESSAGE_HEAD_STOP, 0, body);
    }

/**
* Let Qdee send ir remote-control data
*/
  //% weight=86 blockId=qdee_send_remote_data block="Let Qdee send ir remote-control|key %irKey|"
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
* Let Qdee send ir remote-control data from phone
*/
  //% weight=84 blockId=qdee_send_remote_phone_data block="Let Qdee send phone ir remote-control|key %data|"
  export function qdee_send_remote_phone_data(data: number)
  {
      let irKey: IRKEY;
      switch (data)
      {
          case 0:
              irKey = IRKEY.R0;
              break;
          
          case 1:
              irKey = IRKEY.R1;
              break;
          
          case 2:
              irKey = IRKEY.R2;
              break;
          
          case 3:
              irKey = IRKEY.R3;
              break;
          
          case 4:
              irKey = IRKEY.R4;
              break;
          
          case 5:
                irKey = IRKEY.R5;
              break;
          
          case 6:
              irKey = IRKEY.R6;
              break;
          
          case 7:
              irKey = IRKEY.R7;
              break;
          
          case 8:
              irKey = IRKEY.R8;
              break;
          
         case 9:
              irKey = IRKEY.R9;
              break;
          
          case 10:
              irKey = IRKEY.ADD;
              break;
          
          case 11:
              irKey = IRKEY.MINUS;
              break;
          
      }
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
* Set ir enter learn mode
* @param num number of the learn code in 1-10. eg: 1
*/
  //% weight=82 blockId=qdee_ir_learn_mode block="Set ir enter learning mode,code number(1~10) %num|"   
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
* Let Qdee send ir learn data
* @param num number of the learn code in 1-10. eg: 1
*/
  //% weight=80 blockId=qdee_send_learn_data block="Let Qdee send ir learning code,code|number(1~10) %num|"
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
* Get the volume level detected by the sound sensor, range 0 to 255
*/
//% weight=78 blockId=qdee_getSoundVolume block="Sound volume"
	export function qdee_getSoundVolume(): number {	
  	    return volume;
    }	

/**
 *  Get Qdee current voltage,the unit is mV
*/
    //% weight=76 blockGap=50 blockId=qdee_getBatVoltage block="Get Qdee current voltage (mV)"
    export function qdee_getBatVoltage(): number {
        return currentVoltage;
    }

    const APDS9960_I2C_ADDR = 0x39;
    const APDS9960_ID_1 = 0xA8;
    const APDS9960_ID_2 = 0x9C;
    const APDS9960_ID_3 = 0xAB;
    /* APDS-9960 register addresses */
    const APDS9960_ENABLE = 0x80;
    const APDS9960_ATIME  = 0x81;
    const APDS9960_WTIME  = 0x83;
    const APDS9960_AILTL  = 0x84;
    const APDS9960_AILTH  = 0x85;
    const APDS9960_AIHTL  = 0x86;
    const APDS9960_AIHTH  = 0x87;
    const APDS9960_PERS = 0x8C;
    const APDS9960_CONFIG1 = 0x8D;
    const APDS9960_PPULSE  = 0x8E;
    const APDS9960_CONTROL = 0x8F;
    const APDS9960_CONFIG2 = 0x90;
    const APDS9960_ID = 0x92;
    const APDS9960_CDATAL  = 0x94;
    const APDS9960_CDATAH  = 0x95;
    const APDS9960_RDATAL  = 0x96;
    const APDS9960_RDATAH  = 0x97;
    const APDS9960_GDATAL  = 0x98;
    const APDS9960_GDATAH  = 0x99;
    const APDS9960_BDATAL  = 0x9A;
    const APDS9960_BDATAH  = 0x9B;
    const APDS9960_POFFSET_UR = 0x9D;
    const APDS9960_POFFSET_DL = 0x9E;
    const APDS9960_CONFIG3 = 0x9F;


    /* LED Drive values */
    const LED_DRIVE_100MA = 0;

    /* ALS Gain (AGAIN) values */
    const AGAIN_4X = 1;
    
    /* Default values */
    const DEFAULT_ATIME = 219;    // 103ms
    const DEFAULT_WTIME = 246;    // 27ms
    const DEFAULT_PROX_PPULSE = 0x87;    // 16us, 8 pulses
    const DEFAULT_POFFSET_UR = 0;       // 0 offset
    const DEFAULT_POFFSET_DL = 0;       // 0 offset      
    const DEFAULT_CONFIG1 = 0x60;    // No 12x wait (WTIME) factor
    const DEFAULT_AILT = 0xFFFF;  // Force interrupt for calibration
    const DEFAULT_AIHT = 0;
    const DEFAULT_PERS = 0x11;    // 2 consecutive prox or ALS for int.
    const DEFAULT_CONFIG2 = 0x01;    // No saturation interrupts or LED boost  
    const DEFAULT_CONFIG3 = 0;       // Enable all photodiodes, no SAI
    const DEFAULT_LDRIVE = LED_DRIVE_100MA;
    const DEFAULT_AGAIN = AGAIN_4X;
    
    const OFF = 0;
    const POWER = 0;
    const AMBIENT_LIGHT = 1;
    const ALL = 7;


    function i2cwrite(reg: number, value: number) {
       let buf = pins.createBuffer(2);
       buf[0] = reg;
       buf[1] = value;
       pins.i2cWriteBuffer(APDS9960_I2C_ADDR, buf);
    }

     function i2cread(reg: number): number {
		pins.i2cWriteNumber(APDS9960_I2C_ADDR, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(APDS9960_I2C_ADDR, NumberFormat.UInt8BE);
        return val;
    }

    function GetColorSenserID(): boolean {
        let id = i2cread(APDS9960_ID);
        //  serial.writeLine("id:")
        //  serial.writeNumber(id); 
        if (id == 0 || id == 0x7F || id == 0xFF) {
            return false;
        }
        return true;
    }

     function InitColor(): boolean {
         let id = i2cread(APDS9960_ID);
        //  serial.writeLine("id:")
        //  serial.writeNumber(id); 
        if (!(id == APDS9960_ID_1 || id == APDS9960_ID_2 || id == APDS9960_ID_3)) {
            return false;
         }
        //  serial.writeLine("set mode:")
        setMode(ALL, OFF);
        i2cwrite(APDS9960_ATIME, DEFAULT_ATIME);
        i2cwrite(APDS9960_WTIME, DEFAULT_WTIME);
        i2cwrite(APDS9960_PPULSE, DEFAULT_PROX_PPULSE);
        i2cwrite(APDS9960_POFFSET_UR, DEFAULT_POFFSET_UR);
        i2cwrite(APDS9960_POFFSET_DL, DEFAULT_POFFSET_DL);
         i2cwrite(APDS9960_CONFIG1, DEFAULT_CONFIG1);
        setLEDDrive(DEFAULT_LDRIVE);
        setAmbientLightGain(DEFAULT_AGAIN);
        setLightIntLowThreshold(DEFAULT_AILT);
        setLightIntHighThreshold(DEFAULT_AIHT);
        i2cwrite(APDS9960_PERS, DEFAULT_PERS);
        i2cwrite(APDS9960_CONFIG2, DEFAULT_CONFIG2);
        i2cwrite(APDS9960_CONFIG3, DEFAULT_CONFIG3);
        return true;  
    }
        
     function setMode(mode: number, enable: number) {
         let reg_val = getMode();
         serial.writeLine("mode:");
         serial.writeNumber(reg_val);
            /* Change bit(s) in ENABLE register */
        enable = enable & 0x01;
         if (mode >= 0 && mode <= 6)
         {
             if (enable > 0)
             {
                reg_val |= (1 << mode);
             }
             else
             {
                //reg_val &= ~(1 << mode);
                 reg_val &= (0xff-(1 << mode)); 
             }
        }
         else if(mode == ALL)
         {
             if (enable > 0)
             {
                reg_val = 0x7F;
             }
             else
             {
                reg_val = 0x00;
             }
        }
        i2cwrite(APDS9960_ENABLE,reg_val);
    }
    
     function getMode(): number {
            let enable_value = i2cread(APDS9960_ENABLE);
            return enable_value;
        }

     function setLEDDrive(drive: number) {
        let val = i2cread(APDS9960_CONTROL);
            /* Set bits in register to given value */
         drive &= 0b00000011;
         drive = drive << 6;
         val &= 0b00111111;
         val |= drive;
         i2cwrite(APDS9960_CONTROL,val);
    }
    
     function setLightIntLowThreshold(threshold: number) {
        let val_low = threshold & 0x00FF;
        let val_high = (threshold & 0xFF00) >> 8;
        i2cwrite(APDS9960_AILTL, val_low);
        i2cwrite(APDS9960_AILTH,val_high);
    }

     function setLightIntHighThreshold(threshold: number) {
        let val_low = threshold & 0x00FF;
        let val_high = (threshold & 0xFF00) >> 8;
        i2cwrite(APDS9960_AIHTL, val_low);
        i2cwrite(APDS9960_AIHTH, val_high);
    }

     function enableLightSensor(interrupts: boolean) {
        setAmbientLightGain(DEFAULT_AGAIN);
        if (interrupts)
        {
            setAmbientLightIntEnable(1);
        }   
        else
        {
            setAmbientLightIntEnable(0);
        }
        enablePower();
        setMode(AMBIENT_LIGHT,1);
    }

     function setAmbientLightGain(drive: number) {
        let val = i2cread(APDS9960_CONTROL);
            /* Set bits in register to given value */
        drive &= 0b00000011;
        val &= 0b11111100;
        val |= drive;
        i2cwrite(APDS9960_CONTROL,val);
    }

     function getAmbientLightGain(): number {
        let val = i2cread(APDS9960_CONTROL);
        val &= 0b00000011;
        return val;
    }

     function enablePower() {
        setMode(POWER,1);
    }

     function setAmbientLightIntEnable(enable: number) {
        let val = i2cread(APDS9960_ENABLE);
            /* Set bits in register to given value */
        enable &= 0b00000001;
        enable = enable << 4;
        val &= 0b11101111;
        val |= enable;
        i2cwrite(APDS9960_ENABLE, val);
    }

     function readAmbientLight(): number {
        let val_byte = i2cread(APDS9960_CDATAL);
        let val = val_byte;
        val_byte = i2cread(APDS9960_CDATAH);
        val = val + val_byte << 8;
        return val;
    }
    
     function readRedLight(): number {
     
        let val_byte = i2cread(APDS9960_RDATAL);
        let val = val_byte;
        val_byte = i2cread(APDS9960_RDATAH);
        val = val + val_byte << 8;
        return val;
    }

     function readGreenLight(): number {
        
           let val_byte = i2cread(APDS9960_GDATAL);
           let val = val_byte;
           val_byte = i2cread(APDS9960_GDATAH);
           val = val + val_byte << 8;
           return val;
    }
    
     function readBlueLight(): number {
        
           let val_byte = i2cread(APDS9960_BDATAL);
           let val = val_byte;
           val_byte = i2cread(APDS9960_BDATAH);
           val = val + val_byte << 8;
           return val;
       }

/**
 * Initialize the color sensor,please execute at boot time
 */
    //% weight=74 blockId=qdee_init_colorSensor block="Initialize color sensor port at %port"
    export function qdee_init_colorSensor(port: colorSensorPort) {
        if (i2cPortValid)
        {
            InitColor();
            enableLightSensor(false);
            control.waitMicros(100);
        }
        i2cPortValid = false;
    }

    /**
	 *  Color sensor return the color.
	 */
	//% weight=72 blockId=qdee_checkCurrentColor block="Current color %color"
    export function qdee_checkCurrentColor(color: qdee_Colors): boolean {
		let r = readRedLight();
		let g = readGreenLight();
		let b = readBlueLight();
        let t = qdee_Colors.Red;
    
		if (r > g)
		{
			t = qdee_Colors.Red;
		}	
		else
		{
			t = qdee_Colors.Green;
		}	

		if (t == qdee_Colors.Green && g < b - 100)
		{
			t = qdee_Colors.Blue;
		}	
		if (t == qdee_Colors.Red && r < b)
		{
			t = qdee_Colors.Blue;
         }
         serial.writeNumber(r); 
         serial.writeLine("->red");
         serial.writeNumber(g); 
         serial.writeLine("->green"); 
         serial.writeNumber(b); 
         serial.writeLine("->blue"); 
        if(r < 260 && g < 260 && b < 530)
		{
            t = qdee_Colors.Black;
            return (color == t);
        }
        else if (r > 10000 && g > 16000 && b > 22000)
        {
	    if(g * 2 > b)
            	t = qdee_Colors.White;
            return (color == t);
        }
		if (t == qdee_Colors.Blue && b > 5000) {
           // serial.writeLine("blue");
            
		}
		else if (t == qdee_Colors.Green && g > 3500) {
           // serial.writeLine("green");
		}
		else if (t == qdee_Colors.Red && r > 3500) {
			//serial.writeLine("red");
		}
		else
        {
            //serial.writeLine("none");
            return false;
        }		
        return (color == t);
	}


/**
* Get the condition of the line follower sensor
*/
    //% weight=70 blockId=qdee_readLineFollowerStatus block="Line follower status|port %port|%status"
    export function qdee_readLineFollowerStatus(port: lineFollowPort, status: qdee_lineFollower): boolean {
        let s1 = 0;
        let s2 = 0;
        switch (port)
        {
            case lineFollowPort.port1:
                s1 = pins.analogReadPin(AnalogPin.P1);
                s2 = pins.analogReadPin(AnalogPin.P2);
                s1 = s1 * 255 / 1023;
                s2 = s2 * 255 / 1023;
                if (s1 < 100)
                    s1 = 0;
                else
                    s1 = 1;
                if (s2 < 100)
                    s2 = 0;
                else
                    s2 = 1;     
                break;
            case lineFollowPort.port6:
                if (PA6_ad < 100)
                    s1 = 0;
                else
                    s1 = 1;
                if (PA7_ad < 100)
                    s2 = 0;
                else
                    s2 = 1;
                break;  
            case lineFollowPort.port8:
                if (PB0_ad < 100)
                    s1 = 0;
                else
                    s1 = 1;
                if (PB1_ad < 100)
                    s2 = 0;
                else
                    s2 = 1;
                break;  
        }
        let s = ((1 & s1) << 1) | s2;
        if (s == status)
        {
            return true;
        }    
        else
        {
            return false;
        }     
    }

    /**
     * Get the line follower sensor port ad value
     */
    //% weight=68 blockId=qdee_lineSensorValue block="Get line follower sensor|port %port|%sensor|ad value"
    export function qdee_lineSensorValue(port: lineFollowPort, sensor: LineFollowerSensor): number {
        let s1 = 0;
        let s2 = 0;
        switch (port)
        {
            case lineFollowPort.port1:
                s1 = pins.analogReadPin(AnalogPin.P1);
                s2 = pins.analogReadPin(AnalogPin.P2);
                s1 = s1 * 255 / 1023;
                s2 = s2 * 255 / 1023;
                break;
            case lineFollowPort.port6:
                s1 = PA6_ad;
                s2 = PA7_ad;
                break;  
            case lineFollowPort.port8:
                s1 = PB0_ad;
                s2 = PB1_ad;
                break;  
        }
        if (sensor == LineFollowerSensor.LFSensor_1)
        {
            return 255 - s1;
        }
        else
        {
            return 255 - s2;    
        }

    }

    let distanceBak = 0;
  /**
   * Get the distance of ultrasonic detection to the obstacle 
   */  
//% weight=66 blockId=qdee_ultrasonic  block="Ultrasonic|port %port|distance(cm)"
    export function qdee_ultrasonic(port: ultrasonicPort): number {
        let trigPin: DigitalPin = DigitalPin.P1;
        switch (port)
        {
            case ultrasonicPort.port1:
                trigPin = DigitalPin.P1;
                break;
            case ultrasonicPort.port2:
                trigPin = DigitalPin.P13;
                break;
            case ultrasonicPort.port3:
                trigPin = DigitalPin.P16;
                break;
        }
        pins.setPull(trigPin, PinPullMode.PullNone);
        pins.digitalWritePin(trigPin, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trigPin, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trigPin, 0);

        let d = pins.pulseIn(trigPin, PulseValue.High, 25000);
        let distance = d;
        // filter timeout spikes
        if (distance == 0 && distanceBak!= 0){
            distance = distanceBak;
        }
        distanceBak = d;
        return distance * 10 /6 /58;
  }
  
    /**
	 * Initialize RGB
	 */
	function qdee_initRGBLight() {
		if (!lhRGBLight) {
			lhRGBLight = QdeeRGBLight.create(DigitalPin.P15, 6, QdeeRGBPixelMode.RGB);
        }
        qdee_clearLight();
    }

    /**
         * Set the brightness of the strip. This flag only applies to future operation.
         * @param brightness a measure of LED brightness in 0-255. eg: 255
    */
    //% blockId="qdee_setBrightness" block="set brightness %brightness"
    //% weight=64
    export function qdee_setBrightness(brightness: number): void {
        lhRGBLight.setBrightness(brightness);
    }
    
    /**
     * Set the color of the colored lights, after finished the setting please perform  the display of colored lights.
     */
    //% weight=62 blockId=qdee_setPixelRGB block="Set|%lightoffset|color to %rgb"
    export function qdee_setPixelRGB(lightoffset: QdeeLights, rgb: QdeeRGBColors)
    { 
        lhRGBLight.setPixelColor(lightoffset, rgb);
     }
    

    /**
     * Set RGB Color argument
     */
    //% weight=60 blockId=qdee_setPixelRGBArgs block="Set|%lightoffset|color to %rgb"
    export function qdee_setPixelRGBArgs(lightoffset: QdeeLights, rgb: number)
    {
        lhRGBLight.setPixelColor(lightoffset, rgb);
    }

    /**
     * Display the colored lights, and set the color of the colored lights to match the use. After setting the color of the colored lights, the color of the lights must be displayed.
     */
    //% weight=58 blockId=qdee_showLight block="Show light"
    export function qdee_showLight() {
        lhRGBLight.show();
    }

    /**
     * Clear the color of the colored lights and turn off the lights.
     */
    //% weight=56 blockGap=50 blockId=qdee_clearLight block="Clear light"
    export function qdee_clearLight() {
        lhRGBLight.clear();
    }

	function mapRGB(x: number, in_min: number, in_max: number, out_min: number, out_max: number): number {
		return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
    
    function qdee_send_to_check(str: string)
    {
        let buf = pins.createBuffer(str.length  + 5);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = (str.length + 3) & 0xff;
        buf[3] = 0x3E;//cmd type
        buf[4] = 0x9;
        for (let i = 0; i < str.length; i++)
        {
            buf[5 + i] = str.charCodeAt(i);
        }   
        serial.writeBuffer(buf);
    }

    /**
     * Control the IO
     */
    //% weight=54 blockId=controlIODigital block="Set port %status"
    export function controlIODigital(status: statusPort) {
        let buf = pins.createBuffer(7);

        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x05;
        buf[3] = 0x03E;//cmd type
        buf[4] = 0x02;
        buf[5] = 0x06;
        buf[6] = status;
        serial.writeBuffer(buf);
        basic.pause(60);

        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x05;
        buf[3] = 0x03E;//cmd type
        buf[4] = 0x02;
        buf[5] = 0x07;
        buf[6] = status;
        serial.writeBuffer(buf);
        basic.pause(60);

        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x05;
        buf[3] = 0x03E;//cmd type
        buf[4] = 0x02;
        buf[5] = 0x10;
        buf[6] = status;
        serial.writeBuffer(buf);
        basic.pause(60);

        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x05;
        buf[3] = 0x03E;//cmd type
        buf[4] = 0x02;
        buf[5] = 0x11;
        buf[6] = status;
        serial.writeBuffer(buf);
        basic.pause(60);

        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x05;
        buf[3] = 0x03E;//cmd type
        buf[4] = 0x02;
        buf[5] = 0x1A;
        buf[6] = status;
        serial.writeBuffer(buf);
        basic.pause(60);

        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x05;
        buf[3] = 0x03E;//cmd type
        buf[4] = 0x02;
        buf[5] = 0x1B;
        buf[6] = status;
        serial.writeBuffer(buf);
        basic.pause(60);

        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x05;
        buf[3] = 0x03E;//cmd type
        buf[4] = 0x02;
        buf[5] = 0x2D;
        buf[6] = status;
        serial.writeBuffer(buf);
        basic.pause(60);
    }
}
