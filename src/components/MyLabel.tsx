import './myLabel.css';

export interface MyLabelProps {
  /**
   * Este es el titulo
   */
  label: string;
  /**
   * Este es el tamoaño del leabel
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * El valor por defecto de la capitalizacion es false
   */
  allCaps?: boolean;
  /**
   * El valor por defecto de la capitalizacion es false
   */
  color: 'primary' | 'secondary' | 'tertiary';
}

export const MyLabel = ({
  label = 'No label',
  size = 'normal',
  color = 'primary',
  allCaps = false,
}: MyLabelProps) => (
  <span className={`${size} ${`text-${color}`}`}>
    {allCaps ? label.toLowerCase() : label}
  </span>
);
