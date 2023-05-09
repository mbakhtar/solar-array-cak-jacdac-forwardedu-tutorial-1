fwdMotors.servo1.fwdSetEnabled(true)
fwdMotors.servo1.fwdSetAngle(0)
basic.forever(function () {
    if (fwdSensors.solar1.fwdIsLightLevelPastThreshold(45, fwdSensors.thresholdDirection.under)) {
        fwdMotors.servo1.fwdSetAngle(90)
    } else if (fwdSensors.solar1.fwdIsLightLevelPastThreshold(90, fwdSensors.thresholdDirection.under)) {
        fwdMotors.servo1.fwdSetAngle(0)
    } else if (fwdSensors.solar1.fwdIsLightLevelPastThreshold(90, fwdSensors.thresholdDirection.over)) {
        fwdMotors.servo1.fwdSetAngle(-90)
    }
})
