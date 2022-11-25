package Variales1;

public class Tipodevariables1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		byte numeroB=127;
        System.out.println("Tamaño de un byte " + Byte.SIZE);
        System.out.println("El valor maximo de un byte " + Byte.MAX_VALUE);    
        System.out.println("Valor mínimo " + Byte.MIN_VALUE);
        System.out.println("----------------");
        int entero = 24;
        System.out.println("tamaño de un entero " + Integer.BYTES);
        System.out.println("Tamaño " + Integer.SIZE);
        System.out.println("valor Max " + Integer.MAX_VALUE);
        System.out.println("valor Min " + Integer.MIN_VALUE);
        System.out.println("Valor de un Entero" + entero);
        
        System.out.println("------- short -----");
        System.out.println("tamaño de short " + Short.SIZE);
        System.out.println("tamaño bytes en short " + Short.BYTES);
        System.out.println("valor max " + Short.MAX_VALUE);
        System.out.println("valor min " + Short.MIN_VALUE);
        System.out.println("Valor de un entero en Short " + entero);
        
        System.out.println("------- long -----");
        System.out.println("tamaño de long " + Long.SIZE);
        System.out.println("tamaño bytes en long " + Long.BYTES);
        System.out.println("valor max " + Long.MAX_VALUE);
        System.out.println("valor min " + Long.MIN_VALUE);
    
        var systemNum = 0XEC;
        System.out.println("---> " + systemNum);
        
        System.out.println("---- Primitivos float ");
        System.out.println("tamaño en bits float: " + Float.SIZE);
        System.out.println("tamaño en bytesfloat: " + Float.BYTES);
        System.out.println("valor maximo float: " + Float.MAX_VALUE);
        System.out.println("valor minimo float: " + Float.MIN_VALUE);

        System.out.println("---- Primitivos double");

        System.out.println("tamaño en bits double: " + Double.SIZE);
        System.out.println("tamaño en bytes double: " + Double.BYTES);
        System.out.println("valor maximo double: " + Double.MAX_VALUE);
        System.out.println("valor minimo double: X" + Double.MIN_VALUE);
        //Como se pudo ver en el valor maximo
        //Double es mucho más grande que float
        
        double comaD = 1000.10E23;
        double comaF = 100.10f;
        System.out.println("-->float "+ comaF);
        System.out.println("-->Double "+ comaD);
        
        System.out.println("-----> booleanos<-----");
        boolean estado = true; //false
        System.out.println("Estado del booleano: " + estado);
        System.out.println("--> Boolean " + Boolean.FALSE);
        System.out.println("--> Boolean "+ Boolean.TRUE);
        if (estado) {
            System.out.println("--> Es verdadero");
        } else {
            System.out.println("--> Es falso");
        }
        var edad=9;
        //boolean adulto = edad>=10;
        //System.out.println("Var Booleano " + adulto);
        
        if (edad>=10){
        System.out.println("Var Booleano es mayor o igual a 10, tiene: " + edad);
        } else {
        System.out.println("Var Booleano es menor a 10, tiene: " + edad);
        }
        System.out.println("--------char-------");
        
        //char caracter="halo".charAt(0);
        char caracter = 'a';
        System.out.println("---> '\u0166'" + caracter);

	}

}
