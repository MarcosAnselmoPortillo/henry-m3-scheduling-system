import { Request, Response, NextFunction } from "express"
import { isValidDateFormat } from "../utils/dateUtil";
import { isValidTimeFormat } from "../utils/timeUtil";

export const validateScheduleAppointmentData = (req: Request, res: Response, next: NextFunction) => {
    const {date, time, description, userId}  = req.body;
    
    if(!userId || !date || !time || !description){
        return res.status(400).json({message:"Missing data!"});
    }

    if (!isValidDateFormat(date)) 
        return res.status(400).json({ message: 'Date must be a string with format YYYY-MM-DD' });

    if (!isValidTimeFormat(time))  
        return res.status(400).json({ message: 'Time must be a string with format HH:mm' });

    if  (typeof userId !== 'number') {
        return res.status(400).send('User ID must be an integer number');
    }

    if  (typeof description !== 'string') {
        return res.status(400).send('Description must be a string');
    }

    if (description.length > 100) {
        return res.status(400).send('Description must be less than 100 characters');
    }
    next()
}