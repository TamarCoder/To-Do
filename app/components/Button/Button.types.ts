export type ButtonVariant =  'default' | 'success' | 'error' | 'warning' | 'info' | 'purple';

export type ButtonSize   =  'sm' |  'md' | 'lg';
   
export enum ButtonType {
  button= 'button',
  submit='submit',
  reset='reset'
}


export interface ButtonProps {
  label: string;                        
  onClick?: () => void;                    
  type?: ButtonType;                     
  variant?: ButtonVariant;               
  size?: ButtonSize;                     
  disabled?: boolean;                                   
  iconLeft?: React.ReactNode;            
  iconRight?: React.ReactNode;           
  className?: string;
}  





 



