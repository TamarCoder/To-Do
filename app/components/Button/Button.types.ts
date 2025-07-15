export enum ButtonVariant {
  default = 'default', 
  primary = 'primary', 
  secondary = 'secondary', 
  outline = 'outline',  
  ghost = 'ghost', 
  danger = 'danger',
  success = 'success'
}

export enum ButtonSize  {
   sm  = 'sm',
   md = 'md', 
   lg = 'lg',
}

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