package advance_java.collection_framework;

import java.util.Hashtable;

public class HashTableExamples {
    public static void main(String[] args) {
        createHashTable();
    }

    private static void createHashTable() {
        Hashtable<Integer, Integer> hashTable = new Hashtable<>();
        hashTable.put(1,1);
    }
}
