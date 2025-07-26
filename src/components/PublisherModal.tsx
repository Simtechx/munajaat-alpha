
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { X, BookOpen, Mail, MapPin } from 'lucide-react';
import { DayOfWeek, DAY_THEMES } from '@/types';

interface PublisherModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDay: DayOfWeek;
}

export const PublisherModal: React.FC<PublisherModalProps> = ({ isOpen, onClose, selectedDay }) => {
  const theme = DAY_THEMES[selectedDay];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/2af23d57-0868-43d3-9c84-fbfe7a82db3a.png" 
                alt="Munājāat Maqbūl Logo" 
                className="w-10 h-10"
              />
              <h2 className="text-2xl font-bold text-gray-800">Publisher Information</h2>
            </div>
            <Button 
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-gray-700 rounded-full"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="about">About the Book</TabsTrigger>
              <TabsTrigger value="publisher">Publisher Info</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Munājāat Maqbūl</h3>
                  <p className="text-base font-medium text-gray-700 mb-2">Accepted Supplications for the Soul</p>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg space-y-3">
                <p className="text-sm text-gray-700 leading-relaxed">
                  A heartfelt collection of du'ās compiled by Hadrat Hakimul Ummah Maulana Ashraf 'Ali Thanawi (رحمه الله) and thoughtfully translated into English by Maulana Mahomed Mahomedy.
                </p>
                
                <p className="text-sm text-gray-700 leading-relaxed">
                  This pocket edition, designed for daily recitation and travel (Hajj, Umrah, etc.), features:
                </p>
                
                <ul className="text-sm text-gray-700 leading-relaxed ml-4 space-y-1">
                  <li>• Authentic, accepted du'ās</li>
                  <li>• Easy-to-read font inspired by Qur'anic script</li>
                  <li>• Carefully revised for mobile readability</li>
                </ul>
                
                <p className="text-sm text-gray-700 leading-relaxed">
                  Originally translated in 2001 and published under the guidance of esteemed scholars, this edition has been updated for clarity and corrected for past typographical issues. Masnūn du'ās were excluded to ensure pocket-size portability.
                </p>
                
                <p className="text-sm text-gray-700 leading-relaxed">
                  We pray Allah ﷻ accepts this work, makes it a source of thawāb-e-jāriyah, and benefits all readers.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="publisher" className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Al-Farūq Publishers</h3>
                  <p className="text-sm text-gray-600">South Africa</p>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-700">Contact Information:</p>
                    <p className="text-sm text-gray-600">alfaruqpublishers@gmail.com</p>
                    <p className="text-sm text-gray-600">maulanamahomedy@gmail.com</p>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    <strong>Translator & Editor:</strong> Mahomed Mahomedy<br/>
                    <strong>Location:</strong> Durban, South Africa<br/>
                    <strong>Publication Date:</strong> 17 Shawwal 1433 / 03 Sept 2012
                  </p>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <p className="text-lg arabic-text font-semibold mb-2 rtl" style={{ fontFamily: 'Amiri, serif' }}>
                    رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ ، وَتُبْ عَلَيْنَا إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    "Our Lord, accept from us. Indeed You are the Hearing, the Knowing. And turn to us in forgiveness. Indeed, You are the Accepting of repentance, the Merciful."
                  </p>
                  <p className="text-sm text-gray-700 mt-3">Was-salām</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};
