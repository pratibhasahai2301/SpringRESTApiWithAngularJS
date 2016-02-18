package com.pratibha.rest.companydetails.util;

import java.util.List;

public class Validator {

	public static boolean isNotNull(Object obj){
		if(obj != null){
			if(obj instanceof String && "".equalsIgnoreCase((String) obj)){
				return false;
			}else if (obj instanceof List){
				List listObj = (List)obj;
				if(listObj.isEmpty()){
					return false;
				}
			}
		}else{
			return false;
		}
		
		return true;
	}
}
