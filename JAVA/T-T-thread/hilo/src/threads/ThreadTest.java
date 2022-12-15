package threads;

public class ThreadTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Thread t1 = new Thread1();
		Thread t2 = new Thread2();
		
		t1.start();
		t2.start();
		try {
			t1.join();
		} catch (InterruptedException e) {
			
		}
		System.out.println("sean ejecutados los 2 threads");
		

	}

}
